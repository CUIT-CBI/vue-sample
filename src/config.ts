const CONFIGS: IConfig = {
  current: 256,
  networks: {
    256: {
      rpc: "https://http-testnet.hecochain.com/",
      ethscan: "https://testnet.hecoinfo.com",
      contractAddr: "0x29d7FF1b1901ca8990C4F633C30ebFf2fFD540C1",
    },
  },
};

const CONFIG = {
  chainId: CONFIGS.current,
  ...CONFIGS.networks[CONFIGS.current],
};

const URLS: any = {};
for (const key in CONFIGS.networks) {
  URLS[key] = CONFIGS.networks[key].rpc;
}
const CHAIN_IDS = Object.keys(CONFIGS.networks).map((key) => Number(key));
export { CHAIN_IDS, URLS, CONFIGS };
export const isMobile = window.outerWidth <= 768;
export default CONFIG;
