<template>
    <div class="col-xs-12 col-sm-6">
        <template v-if="server">
            <p>Server #{{ server.id }} has a {{ server.status }} status</p>
            <button @click="changeToNormal">Change to Normal</button>
        </template>
        <p v-else>Server Details are currently not updated</p>
    </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    changeToNormal() {
      this.server.status = "Normal";
    }
  },
  created() {
    eventBus.$on("serverWasLoaded", server => {
      this.server = server;
    });
  }
};
</script>

<style>
</style>
