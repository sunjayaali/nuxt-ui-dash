<script setup lang="ts"></script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Card" />

      <UPageBody>
        <UCard title="Card">
          <template #title> Slot Title </template>

          <template #description> Slot Description </template>

          Content

          <template #footer> Slot Footer </template>
        </UCard>

        <UPageCard
          title="Tailwind CSS"
          description="Nuxt UI integrates with latest Tailwind CSS, bringing significant improvements."
          icon="i-simple-icons-tailwindcss"
          to="https://tailwindcss.com/blog/tailwindcss-v4"
          target="_blank"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
