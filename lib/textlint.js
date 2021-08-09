import { TextLintEngine } from "textlint";
import path from "path";
const options = {
  configFile: path.resolve(".textlintrc"),
};

const engine = new TextLintEngine(options);

export async function proofreadText(text) {
  const results = await engine.executeOnText(text);
  return results[0].messages;
}
