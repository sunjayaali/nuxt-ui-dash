export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    loading: false,
  }),
  actions: {
    async increment() {
      this.loading = true
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count++
      this.loading = false
    },
    async decrement() {
      this.loading = true
      await new Promise((resolve) => setTimeout(resolve, 1000))
      this.count--
      this.loading = false
    },
  },
})
