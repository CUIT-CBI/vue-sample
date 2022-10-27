<template>
  <div class="about">
    <!-- <h1>{{ connected }}</h1> -->
    <h1 v-if="connected">{{ account }}</h1>
    <button v-else @click="connectWallet">connect</button>
  </div>
</template>

<script lang="ts">
import { useAccountStore } from "@/stores/wallet";
import { useConnect } from "@/libs/wallets/hooks";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useAccountStore();
    const { account, connected } = storeToRefs(store);
    return {
      store,
      account,
      connected,
    };
  },
  methods: {
    connectWallet() {
      useConnect();
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
