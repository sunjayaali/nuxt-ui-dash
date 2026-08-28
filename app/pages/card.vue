<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Card" />
      <Placeholder class="h-32" />

      <UPageBody>
        <UCard title="Card">
          <template #title>
            Slot Title
          </template>

          <template #description>
            Slot Description
          </template>

          Content

          <template #footer>
            Slot Footer
          </template>
        </UCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
