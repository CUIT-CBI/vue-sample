import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useAccountStore = defineStore("account", () => {
  const account = ref("");
  const connected = computed(() => {
    return !!account.value;
  });
  const setAccount = (addr: string) => {
    account.value = addr;
  };
  return { account, connected, setAccount };
});
