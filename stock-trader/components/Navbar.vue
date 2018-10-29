<template>
  <nav
    class="navbar has-shadow is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link
          class="navbar-item is-size-5 has-text-weight-semibold has-text-primary"
          to="/"
        >
          Stock Trader
        </nuxt-link>

        <a
          :class="['navbar-burger', 'burger', {'is-active': isActive}]"
          :aria-expanded="isActive"
          role="button"
          aria-label="menu"
          @click="toggleBurgerMenu"
        >
          <span :aria-hidden="!isActive"/>
          <span :aria-hidden="!isActive"/>
          <span :aria-hidden="!isActive"/>
        </a>
      </div>

      <div
        :class="['navbar-menu', {'is-active': isActive}]"
      >
        <div class="navbar-start">
          <nuxt-link
            :class="['navbar-item', {'is-active': $route.name === 'portfolio'}]"
            to="/portfolio"
          >
            Portfolio
          </nuxt-link>
          <nuxt-link
            :class="['navbar-item', {'is-active': $route.name === 'stocks'}]"
            to="/stocks"
          >
            Stocks
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <a class="navbar-item">
            End Day
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              Save &amp; Load
            </a>
            <div class="navbar-dropdown">
              <a class="navbar-item">
                Save Data
              </a>
              <a class="navbar-item">
                Load Data
              </a>
            </div>
          </div>
          <div class="navbar-item">
            Funds: ${{ formattedFunds }}
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  computed: {
    formattedFunds() {
      return new Intl.NumberFormat().format(this.$store.getters.funds)
    }
  },
  methods: {
    toggleBurgerMenu() {
      this.isActive = !this.isActive
    }
  }
}
</script>
