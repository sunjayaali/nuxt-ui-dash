<script setup lang="ts">
const cards = ref([
  {
    title: 'Icons',
    description:
      'Nuxt UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/docs/getting-started/integrations/icons',
  },
  {
    title: 'Fonts',
    description:
      'Nuxt UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/docs/getting-started/integrations/fonts',
  },
  {
    title: 'Color Mode',
    description:
      'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
  },
  {
    title: 'Color Mode',
    description:
      'Nuxt UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/docs/getting-started/integrations/color-mode',
  },
])
</script>

<template>
  <UContainer>
    <UPage>
      <UPageBody>
        <div class="flex flex-col gap-4 md:flex-row">
          <UCard
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :to="card.to"
          />
        </div>

        <UPageGrid>
          <UCard
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :description="card.description"
            :icon="card.icon"
            :to="card.to"
          />
        </UPageGrid>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
