export default function () {
  const auth = useAuthStore()

  watch(
    () => auth.isAuthenticated(),
    (isAuthenticated) => {
      if (!isAuthenticated) {
        navigateTo('/auth')
      } else {
        navigateTo('/card')
      }
    },
  )
}
