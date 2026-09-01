import type { User } from '~/types/user'

export const useAuthStore = defineStore('auth', () => {
  const { $authService } = useNuxtApp()

  const user = useCookie<User | null>('auth_user')

  const isAuthenticated = computed(() => user.value !== null)

  async function login() {
    user.value = await $authService.login()
  }

  async function logout() {
    await $authService.logout()
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
})
