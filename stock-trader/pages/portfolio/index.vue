<template>
  <section class="section">
    <div class="container">
      <div
        v-if="$store.getters.portfolio.length"
        class="columns is-multiline is-8"
      >
        <stock
          v-for="stock in $store.getters.portfolio"
          :stock="stock"
          :key="stock.name"
          mode="sell"
          @sellStocks="sellStocks"
        />
      </div>
      <h3
        v-else
        class="title"
      >
        You have no stocks on your portfolio.
      </h3>
    </div>
  </section>
</template>

<script>
import Stock from '@/components/Stock.vue'

export default {
  components: { Stock },
  methods: {
    sellStocks(order) {
      this.$store.dispatch('sellStocks', order)
    }
  }
}
</script>
