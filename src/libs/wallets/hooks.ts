import CONFIG, { URLS } from "@/config";
import TESTABI from "@/libs/abis/test.json";
import { useAccountStore } from "@/stores/wallet";
import { ethers } from "ethers";

// export function useProvider() {
//   const { chainId } = CONFIG;
//   const url = URLS[chainId || CONFIG.chainId];
//   return new ethers.providers.JsonRpcProvider(url);
// }

const { ethereum } = window as any;

export function useProvider() {
  return new ethers.providers.Web3Provider(ethereum);
}

export async function useConnect() {
  const res = await ethereum.send("eth_requestAccounts");
  const accounts = res.result;
  if (accounts.length == 0) {
    return;
  }

  const store = useAccountStore();
  const { setAccount } = store;
  setAccount(ethereum.selectedAddress);
  const handleConnect = () => {
    console.log("Handling 'connect' event");
    setAccount(ethereum.selectedAddress);
  };
  const handleChainChanged = (chainId: string | number) => {
    console.log("Handling 'chainChanged' event with payload", chainId);
    window.location.reload();
  };
  const handleAccountsChanged = (accounts: string[]) => {
    console.log("Handling 'accountsChanged' event with payload", accounts);
    setAccount(ethereum.selectedAddress);
  };
  ethereum.on("connect", handleConnect);
  ethereum.on("chainChanged", handleChainChanged);
  ethereum.on("accountsChanged", handleAccountsChanged);
}

export function selectedAccount() {
  const { ethereum } = window as any;
  return ethereum.selectedAddress;
}

const selectedAddress = selectedAccount();
if (selectedAddress !== "") {
  const store = useAccountStore();
  const { setAccount } = store;
  setAccount(selectedAddress);
}

export const testContract = new ethers.Contract(
  CONFIG.contractAddr,
  TESTABI,
  useProvider()
);

export const getDataFromContract = async () => {
  return await testContract.get();
};

export const setDataToContract = async (value: number) => {
  const signer = useProvider().getSigner();
  const contractSigner = testContract.connect(signer);
  return await contractSigner.set(value);
};
