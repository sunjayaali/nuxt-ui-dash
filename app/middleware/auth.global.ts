export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()
  console.log(to)
  console.log('middleware auth triggered')

  if (to.path === '/auth') {
    if (auth.isAuthenticated()) {
      return navigateTo('/card')
    }

    return
  }

  if (to.matched.length === 0) {
    return
  }

  if (!auth.isAuthenticated()) {
    return navigateTo('/auth')
  }
})
