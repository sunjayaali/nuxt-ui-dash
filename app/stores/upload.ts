export type UploadFile = {
  file: File
  progress: number
  status: 'pending' | 'uploading' | 'completed' | 'error'
  uploadUrl?: string
}

type UploadResponse = {
  files: {
    filename: string
    sessionUrl: string
  }[]
}

export const useUploadStore = defineStore('upload', {
  state: () => ({
    files: [] as UploadFile[],
    uploading: false,
  }),

  actions: {
    setFiles(selectedFiles: File[]) {
      this.files = selectedFiles.map((file) => ({
        file,
        progress: 0,
        status: 'pending',
      }))
    },

    async upload() {
      this.uploading = true

      try {
        const response = await $fetch<UploadResponse>(
          'http://localhost:8888/uploads',
          {
            method: 'POST',
            body: {
              files: this.files.map((item) => ({
                filename: item.file.name,
                contentType: item.file.type,
                size: item.file.size,
              })),
            },
          },
        )

        console.log(response)

        // Save the GCS session URL to each file
        for (const uploaded of response.files) {
          const item = this.files.find(
            (item) => item.file.name === uploaded.filename,
          )

          if (!item) continue

          item.uploadUrl = uploaded.sessionUrl
        }

        const chunkSize = 8 * 1024 * 1024 // 8 MB

        for (const item of this.files) {
          item.status = 'uploading'

          let offset = 0

          while (offset < item.file.size) {
            const chunk = item.file.slice(
              offset,
              Math.min(offset + chunkSize, item.file.size),
            )

            const end = offset + chunk.size - 1
            const isLastChunk = end === item.file.size - 1

            try {
              const response = await fetch(item.uploadUrl!, {
                method: 'PUT',
                headers: {
                  'Content-Range': `bytes ${offset}-${end}/${item.file.size}`,
                },
                body: chunk,
              })

              console.log(response)

              if (response.status !== 308 && !response.ok) {
                item.status = 'error'

                throw new Error(
                  `Upload failed: ${item.file.name} (${response.status})`,
                )
              }

              offset += chunk.size

              item.progress = Math.round((offset / item.file.size) * 100)

              if (isLastChunk) {
                item.status = 'completed'
                item.progress = 100
                return
              }
            } catch (error) {
              if (isLastChunk) {
                console.warn(
                  'Final request was rejected by browser, but GCS may have completed the upload.',
                  error,
                )

                item.status = 'completed'
                item.progress = 100
                return
              }

              item.status = 'error'
              throw error
            }
          }
        }
      } finally {
        this.uploading = false
      }
    },
  },
})
