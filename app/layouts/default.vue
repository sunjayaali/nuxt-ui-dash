<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'

const auth = useAuthStore()
useAuthGuard()

const user = auth.user!

const links = [
  [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/',
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
    {
      label: 'Page',
      defaultOpen: true,
      children: [
        {
          label: 'Page',
          to: '/page',
        },
        {
          label: 'Page Header',
          to: '/page-header',
        },
        {
          label: 'Page Card',
          to: '/page-card',
        },
        {
          label: 'Page Grid',
          to: '/page-grid',
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

// const user = ref({
//   name: auth.user?.name,
//   avatar: {
//     src: 'https://picsum.photos/seed/picsum/200/300',
//     alt: auth.user?.name ?? '',
//   },
// })
const dropdownItems = ref<DropdownMenuItem[][]>([
  [
    {
      label: user.name,
      avatar: {
        src: 'https://picsum.photos/seed/picsum/200/300',
        loading: 'lazy',
      },
      type: 'label',
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-lucide-log-out',
      onSelect() {
        auth.logout()
      },
    },
  ],
])
</script>

<template>
  <UDashboardGroup>
    <UDashboardSidebar :ui="{ footer: 'border-t border-default' }" collapsible>
      <template #toggle>
        <UDashboardSidebarToggle variant="subtle" />
      </template>

      <template #default="{ collapsed }">
        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[0]"
          orientation="vertical"
          tooltip
          popover
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links[1]"
          orientation="vertical"
          tooltip
          class="mt-auto"
        />
      </template>

      <template #footer="{ collapsed }">
        <UDropdownMenu
          :items="dropdownItems"
          :ui="{
            content: collapsed
              ? 'w-48'
              : 'w-(--reka-dropdown-menu-trigger-width)',
          }"
        >
          <UButton
            v-bind="{
              ...user,
              trailingIcon: collapsed ? undefined : 'i-lucide-chevrons-up-down',
            }"
            :avatar="{
              src: 'https://picsum.photos/seed/picsum/200/300',
            }"
            :label="user.name"
            color="neutral"
            variant="ghost"
            block
            :square="collapsed"
            class="data-[state=open]:bg-elevated"
            :ui="{
              trailingIcon: 'text-dimmed',
            }"
          />
        </UDropdownMenu>
      </template>
    </UDashboardSidebar>

    <UDashboardPanel>
      <UDashboardNavbar>
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>

        <template #trailing> trailing </template>

        <template #right>
          <UColorModeButton />
        </template>
      </UDashboardNavbar>

      <slot />
    </UDashboardPanel>
  </UDashboardGroup>
</template>
