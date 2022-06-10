import { web3 } from "@/configs/web3_config";

export async function miner_command() {
  console.log(web3.miner);
};