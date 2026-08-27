export type HelloResponse = {
  message: string
}

export const useTestStore = defineStore('test', {
  state: () => ({
    loading: false,
    message: '',
    title: '',
    description: '',
    files: [] as File[],
  }),

  actions: {
    async hello() {
      this.loading = true

      try {
        const response = await $fetch<HelloResponse>(
          'http://localhost:8888/hello',
          {
            method: 'POST',
            body: {
              title: this.title,
              description: this.description,
            },
          },
        )

        this.message = response.message
      } finally {
        this.loading = false
      }
    },
  },
})
