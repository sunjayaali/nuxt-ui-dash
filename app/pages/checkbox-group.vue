<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <UCheckboxGroup :items="['System', 'Light', 'Dark']">
          <template #label=""> Slot Label </template>

          <template #description> Slot Description </template>
        </UCheckboxGroup>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
