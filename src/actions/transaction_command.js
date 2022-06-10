// import {Argument,Option} from "commander";
import { web3 } from "@/configs/web3_config";

// import load_config from "@/utils/load_config";
// export const test_command_argument=new Argument("<actions>","动作类型描述").choices(["init","info"]);
// export const test_command_option=new Option("-t,--test_option <string>").default("test_option_value");

export async function transaction_command() {
  try {
    const accounts = await web3.eth.getAccounts();
    const lock_status = await web3.eth.personal.unlockAccount(accounts[0], "glyz205070410");
    console.log(accounts[0], "lock_status", lock_status);
    const transaction_hash = await web3.eth.sendTransaction({
      from: accounts[0],
      to: accounts[1],
      value: web3.utils.toWei("6", "ether")
    });
    console.log("交易完成!", "交易流水=>", transaction_hash);
  } catch (error) {
    console.log(error);
  }
};