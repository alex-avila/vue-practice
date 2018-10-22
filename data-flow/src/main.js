import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    loadServerDetails(server) {
      this.$emit('serverWasLoaded', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
