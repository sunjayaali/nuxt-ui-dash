<script setup lang="ts">
const test = useTestStore()
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader
        title="Document Review"
        description="Upload your documents and review them with AI."
      />

      <UPageBody>
        <UButton
          label="Click Me"
          :loading="test.loading"
          @click="test.hello()"
        />
        <!-- <p>
          {{ test.message }}
        </p> -->

        <UPageCard>
          <UForm :state="test" class="space-y-4" @submit="test.hello">
            <UFormField label="Title">
              <UInput
                v-model="test.title"
                placeholder="Enter the title"
                class="w-full"
              />
            </UFormField>
            <UFormField label="Description">
              <UInput
                v-model="test.description"
                placeholder="Enter the description"
                class="w-full"
              />
            </UFormField>
            <UFormField label="File Upload">
              <UFileUpload
                v-model="test.files"
                multiple
                layout="list"
                class="w-full"
              >
                <!-- <template #files-bottom="{ removeFile, files }">
                  <UButton
                    v-if="files?.length"
                    label="Remove all files"
                    color="neutral"
                    @click="removeFile()"
                  />
                </template> -->

                <!-- <template #file="{ file, removeFile }">
                  <div class="w-full">
                    <div class="flex items-center gap-3">
                      <UIcon name="i-lucide-file" class="size-5 shrink-0" />

                      <span class="min-w-0 flex-1 truncate">
                        {{ file.name }}
                      </span>

                      <UButton icon="i-lucide-x" color="neutral" variant="ghost" size="xs" @click="removeFile(file)" />
                    </div>

                    <UProgress v-model="value"></UProgress>

                  </div>
                </template> -->

                <template #leading> leading </template>
                <template #label> label </template>
                <template #description> description </template>
                <template #actions> actions </template>
                <!-- <template #files> files </template> -->
                <template #files-top> files-top </template>
                <template #files-bottom> files-bottom </template>
                <!-- <template #file> file </template> -->
                <template #file-leading="{}">
                  <div class="relative flex size-8 items-center justify-center">
                    <UIcon
                      name="i-lucide-loader-circle"
                      class="size-6 animate-spin text-primary"
                    />

                    <span class="absolute text-[9px] font-medium"> 100 </span>
                  </div>
                </template>
                <template #file-name> file-name </template>
                <template #file-size> file-size </template>
                <!-- <template #file-trailing> file-trailing </template> -->
              </UFileUpload>
            </UFormField>

            <div class="flex justify-end">
              <UButton type="submit" label="Start Review" />
            </div>
          </UForm>
        </UPageCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
