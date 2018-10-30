<template>
  <div
    class="column is-half"
  >
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-background-light">
          {{ stock.name }} <small>&nbsp;(Price: {{ stock.price }}{{ mode === 'sell' ? ` | Quantity: ${stock.quantity}` : null }})</small>
        </p>
      </header>
      <div class="level card-content">
        <div class="level-left">
          <div class="level-item field">
            <div class="control">
              <input
                v-model="quantity"
                :class="['input', mode === 'buy' ? 'is-primary' : 'is-danger']"
                type="text"
                placeholder="Quantity"
              >
            </div>
          </div>
        </div>
        <div class="level-right">
          <button
            :class="buttonClasses"
            :disabled="Number(quantity) <= 0 || !Number.isInteger(Number(quantity))"
            @click="mode === 'buy' ? buyStocks() : sellStocks()"
          >
            {{ mode === 'buy' ? 'Buy' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stock: {
      type: Object,
      required: true
    },

    mode: {
      type: String,
      validator: v => ['buy', 'sell'].includes(v),
      default: 'buy'
    }
  },

  data() {
    return {
      quantity: '',

      buttonClasses: [
        'level-item',
        'button',
        'is-outlined',
        this.mode === 'buy' ? 'is-primary' : 'is-danger'
      ]
    }
  },

  methods: {
    buyStocks() {
      const order = {
        ...this.stock,
        quantity: Number(this.quantity)
      }
      this.$emit('buyStocks', order)
    },

    sellStocks() {
      const order = {
        ...this.stock,
        quantity: Number(this.quantity)
      }
      this.$emit('sellStocks', order)
    }
  }
}
</script>
