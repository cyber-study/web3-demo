import { program } from "commander";
import { name, version } from "@@/package.json";

import { test_command } from "@/actions/test_command";
import { miner_command } from "@/actions/miner_command";
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
  .command("test")
  .description("这是测试命令")
  .action(test_command);

program
  .command("account")
  .description("创建新账户")
  .addArgument(account_command_argument)
  .action(account_commands);

program
  .command("miner")
  .description("矿工相关的命令")
  .action(miner_command);

program.parse();





