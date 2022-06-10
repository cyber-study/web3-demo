// import {Argument,Option} from "commander";
import { web3 } from "@/configs/web3_config";

// import load_config from "@/utils/load_config";
// export const test_command_argument=new Argument("<actions>","动作类型描述").choices(["init","info"]);
// export const test_command_option=new Option("-t,--test_option <string>").default("test_option_value");

/** 向最后一个账户进行转账 **/
export async function test_command() {
  const accounts = await web3.eth.getAccounts();
  const last_account_address = accounts[accounts.length - 1];
  const mission_task = accounts.slice(0, accounts.length - 1).map(async (current_account_address) => {
    const result = await web3.eth.sendTransaction({ from: current_account_address, to: last_account_address, value: 36000000 });
    return result;
  });
  const mission_result = await Promise.all(mission_task);
  console.log(mission_result);
};