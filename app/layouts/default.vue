<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const open = ref(false)

const links = [
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/',
      onSelect: () => {
        open.value = false
      },
    },
    {
      label: 'Form',
      defaultOpen: true,
      children: [
        {
          label: 'FileUpload',
          to: '/file-upload',
        },
        {
          label: 'Checkbox',
          to: '/checkbox',
        },
      ],
    },
  ],
  [
    {
      label: 'Feedback',
      icon: 'i-lucide-message-circle',
      to: 'https://github.com/nuxt-ui-templates/dashboard',
      target: '_blank',
    },
    {
      label: 'Help & Support',
      icon: 'i-lucide-info',
      to: 'https://github.com/nuxt-ui-templates/dashboard',
      target: '_blank',
    },
  ],
] satisfies NavigationMenuItem[][]
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar
      :ui="{ footer: 'border-t border-default' }"
      collapsible
    >
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>

      <template #header>
        <UDashboardSidebarCollapse variant="subtle" />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
    </UDashboardSidebar>

    <UDashboardPanel>
      <UDashboardNavbar />

      <slot />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
