<template>
    <li @click="loadServerDetails">Server #{{ server.id }}: {{ server.status }}</li>
</template>

<script>
import { eventBus } from "../../main";

export default {
  props: ["server"],
  methods: {
    loadServerDetails() {
      eventBus.loadServerDetails(this.server);
    }
  }
};
</script>

<style>
</style>
