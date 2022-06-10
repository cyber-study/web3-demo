import colors from "colors";
import prompt from "prompt";
import { promisify } from "util";


export default async function input_content(description) {
  try {
    prompt.message = undefined;
    prompt.delimiter = ":";
    prompt.start();
    const { input_content } = await promisify(prompt.get)([{
      name: "input_content",
      required: true,
      message: colors.red("该内容为必填项!"),
      description: colors.white(description)
    }]);
    return input_content;
  } catch (error) {
    if (error.message === "canceled") {
      process.exit(0);
    };
    throw error;
  };
};