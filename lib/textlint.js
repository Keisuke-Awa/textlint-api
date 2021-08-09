import { TextLintEngine } from "textlint";

const engine = new TextLintEngine();

export async function proofreadText(text) {
  const results = await engine.executeOnText(text);
  return results[0].messages;
}
