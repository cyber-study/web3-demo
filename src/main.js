import { program } from "commander";
import { name, version } from "@@/package.json";

import { private_key } from "@/actions/private_key";
import { transaction_command } from "@/actions/transaction_command";
import { account_commands, account_command_argument } from "@/actions/account_commands";

import { create_config_file } from "@/actions/create_config_file";

program
  .usage(name)
  .version(version)

program
  .command("init")
  .description("创建运行时配置文件")
  .action(create_config_file);

program
  .command("transaction")
  .description("测试转账命令")
  .action(transaction_command);

program
  .command("account")
  .description("创建新账户")
  .addArgument(account_command_argument)
  .action(account_commands);

program
  .command("private")
  .description("根据keystore计算出私钥")
  .action(private_key);

program.parse();





