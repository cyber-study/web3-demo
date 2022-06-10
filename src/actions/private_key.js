import { web3 } from "@/configs/web3_config";
import input_content from "@/utils/input_content";

export async function private_key() {
  const input_keystore = await input_content("请输入keystore的json内容");
  const input_password = await input_content("请输入密码");
  const encrypt = await web3.eth.accounts.decrypt(JSON.parse(input_keystore), input_password);
  console.log(encrypt);
};