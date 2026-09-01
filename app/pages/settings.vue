<template>
  <UContainer>
    <UPage>
      <UPageHeader title="Settings" />

      <UPageBody>
        <UCard title="Appearance">
          <UFormField
            label="Dark mode"
            description="Use a dark color scheme"
            orientation="horizontal"
            class="items-center justify-between"
          >
            <UColorModeSwitch />
          </UFormField>

          <USeparator class="my-4" />

          <UFormField
            label="Notifications"
            description="Receive notifications"
            orientation="horizontal"
            class="items-center justify-between"
          >
            <UColorModeSwitch />
          </UFormField>
        </UCard>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
