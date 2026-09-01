interface User {
  id: number
  name: string
  email: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = useCookie<User | null>('user', {
    default: () => null,
  })

  function login(userData: User) {
    user.value = userData
  }

  function logout() {
    user.value = null
  }

  function isAuthenticated() {
    return user.value !== null
  }

  return {
    user,
    isAuthenticated,
    login,
    logout,
  }
})
