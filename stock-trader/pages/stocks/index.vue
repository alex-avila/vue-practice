<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-8">
        <stock
          v-for="stock in $store.state.stocks"
          :stock="stock"
          :key="stock.name"
          @buyStocks="buyStocks"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Stock from '@/components/Stock.vue'

export default {
  components: { Stock },
  methods: {
    buyStocks(order) {
      this.$store.dispatch('buyStocks', order)
    }
  }
}
</script>
