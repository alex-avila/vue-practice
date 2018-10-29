<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline is-8">
        <stock
          v-for="stock in $store.state.portfolio"
          v-bind="stock"
          :key="stock.name"
          @addStock="addStock"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Stock from '@/components/Stock.vue'
export default {
  components: {
    Stock
  }
}
</script>
