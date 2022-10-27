<template>
  <div class="contracts">
    <row>
      <h1>old value:{{ value }}</h1>
    </row>
    <row>
      new value: <input type="number" v-model="newValue" />
      <button @click="setData">修改</button>
    </row>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, ref } from "vue";
import { getDataFromContract, setDataToContract } from "@/libs/wallets/hooks";

export default {
  setup() {
    const value = ref(0);
    const newValue = ref(0);
    onBeforeMount(async () => {
      value.value = await getDataFromContract();
      newValue.value = value.value;
    });

    return {
      value,
      newValue,
    };
  },
  methods: {
    async setData() {
      await setDataToContract(this.newValue);
      this.value = this.newValue;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .contracts {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
