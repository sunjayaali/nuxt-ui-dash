<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <UFileUpload layout="list">
          <template #leading> Slot for leading content </template>

          <template #label> Slot for label content </template>

          <template #description> Slot for description content </template>

          <template #actions> Slot for actions content </template>

          <template #files-top> Slot for files-top content </template>

          <template #files-bottom> Slot for files-bottom content </template>

          <template #file-leading> Slot for file-leading content </template>

          <template #file-name> Slot for file-name content </template>

          <template #file-size> Slot for file-size content </template>

          <template #file-trailing> Slot for file-trailing content </template>
        </UFileUpload>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
