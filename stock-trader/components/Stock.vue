<template>
  <div
    class="column is-half"
  >
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-background-light">
          {{ name }} (Price: {{ price }})
        </p>
      </header>
      <div class="level card-content">
        <div class="level-left">
          <div class="level-item field">
            <div class="control">
              <input
                v-model="quantity"
                type="text"
                class="input is-primary"
                placeholder="Quantity"
              >
            </div>
          </div>
        </div>
        <div class="level-right">
          <button
            class="level-item button is-primary"
            @click="addStock"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      quantity: null
    }
  },
  methods: {
    addStock() {
      const stock = {
        name: this.name,
        price: this.price,
        quantity: this.quantity
      }
      this.$emit('addStock', stock)
    }
  }
}
</script>
