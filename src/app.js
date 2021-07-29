import { TextLintEngine } from "textlint";
const engine = new TextLintEngine();

engine.executeOnText("値を返却する").then((results) => {
  const messages = results[0].messages;
  messages.forEach((message) => {
    console.log(message);
  });
  /*
  [
      {
          id: "rule-name",
          message:"lint message",
          line: 1, // 1-based columns(TextLintMessage)
          column:1 // 1-based columns(TextLintMessage)
      }
  ]
   */
  if (engine.isErrorResults(results)) {
    const output = engine.formatResults(results);
    console.log(output);
  }
});
