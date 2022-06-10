import { yellow } from "colors";
import { Argument } from "commander";
import { web3 } from "@/configs/web3_config";

export const account_command_argument = new Argument("<actions>", "动作类型描述").choices(["get", "create", "query", "list"]);

export async function account_commands(command) {
  if (command === "get") {
    const personal_accounts = await web3.eth.personal.getAccounts();
    return console.log("personal_accounts", personal_accounts);
  }
  if (command === "list") {
    /** 列出所有账户 **/
    const result = await web3.eth.getAccounts();
    return console.log("result", result);
  }
  if (command === "query") {
    /** 查询所有账户的以太币余额 **/
    const account_address = await web3.eth.getAccounts();
    const query_task = account_address.map(async (current_account_address) => {
      return `${yellow("[address]")}: ${current_account_address} ${yellow("[balance]")}: ${await web3.eth.getBalance(current_account_address)}`;
    });
    const query_result = await Promise.all(query_task);
    return console.log(query_result.join("\n"));
  }
  if (command === "create") {
    /** 创建账户 **/
    const result = await web3.eth.personal.newAccount("test");
    return console.log("result", result);
  }
};