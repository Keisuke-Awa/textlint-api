import { TextLintEngine } from "textlint";

const engine = new TextLintEngine();

export async function proofreadText(text) {
  return new Promise((resolve, _reject) => {
    engine.executeOnText(text).then((results) => {
      const messages = results[0].messages;
      return resolve(messages);
    });
  });
}
