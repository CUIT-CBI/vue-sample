declare const ethereum: import("@ethersproject/providers").ExternalProvider;

declare interface IConfig {
  current: number;
  networks: {
    [chainId: number]: {
      rpc: string;
      ethscan: string;
      contractAddr: string;
    };
  };
}
