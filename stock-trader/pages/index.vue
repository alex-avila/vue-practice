<template>
  <section class="section">
    <div class="container box">
      <div>
        <h1
          class="title"
          style="margin: 0 0 1rem"
        >
          Trade or View Your Portfolio
        </h1>
        <p>You may save and load your data.</p>
        <p>Click on "End Day" to begin a new Day!</p>
      </div>
      <hr style="margin: 1rem 0">
      <p class="has-text-weight-bold is-size-5">Your Funds: ${{ formattedFunds }}</p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    formattedFunds() {
      return new Intl.NumberFormat().format(this.$store.getters.funds)
    }
  }
}
</script>
