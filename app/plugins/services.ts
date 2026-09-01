import type { User } from '~/types/user'

interface AuthService {
  login(): Promise<User>
  logout(): Promise<void>
}

class FooService implements AuthService {
  constructor() {
    console.log('FooService initialized')
  }

  async login(): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 500))

    return {
      id: 1,
      name: 'Ali Sunjaya',
      email: 'john.doe@example.com',
    }
  }

  async logout(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
}

export default defineNuxtPlugin((_) => {
  const authService: AuthService = new FooService()

  return {
    provide: {
      authService,
    },
  }
})
