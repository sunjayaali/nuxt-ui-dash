<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <UCheckbox v-model="value">
          <template #label>
            Slot Label
          </template>

          <template #description>
            Slot Description
          </template>
        </UCheckbox>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
