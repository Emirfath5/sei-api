import { IChainData } from "./types";
import { ETH, MATIC, SEI, xDAI } from "./assets";

const supportedChains: IChainData[] = [
  {
    name: "Ethereum Mainnet",
    short_name: "eth",
    chain: "ETH",
    network: "mainnet",
    chain_id: 1,
    network_id: 1,
    rpc_url: "https://api.mycryptoapi.com/eth",
    native_currency: ETH,
  },
  {
    name: "Sei Network",
    short_name: "sei",
    chain: "SEI",
    network: "mainnet",
    chain_id: 1329,
    network_id: 1329,
    rpc_url: "https://rpc.sei-apis.com",
    native_currency: SEI,
  },

  {
    name: "xDAI Chain",
    short_name: "xdai",
    chain: "POA",
    network: "dai",
    chain_id: 100,
    network_id: 100,
    rpc_url: "https://dai.poa.network",
    native_currency: xDAI,
  },
  {
    name: "Matic Mainnet",
    short_name: "matic",
    chain: "Matic",
    network: "mainnet",
    chain_id: 137,
    network_id: 137,
    rpc_url: "https://rpc-mainnet.matic.network",
    native_currency: MATIC,
  },
  {
    name: "Matic Mumbai",
    short_name: "maticmumbai",
    chain: "Matic",
    network: "mumbai",
    chain_id: 80001,
    network_id: 80001,
    rpc_url: "https://rpc-mumbai.matic.today",
    native_currency: MATIC,
  },
  {
    name: "Arbitrum Kovan",
    short_name: "arbitrumkovan",
    chain: "Arbitrum",
    network: "kovan",
    chain_id: 79377087078960,
    network_id: 79377087078960,
    rpc_url: "https://kovan3.arbitrum.io/rpc",
    native_currency: ETH,
  },
];

export default supportedChains;
