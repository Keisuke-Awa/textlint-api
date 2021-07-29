import { TextLintEngine } from "textlint";
import fs from "fs";

const engine = new TextLintEngine();

const testStr = fs.readFileSync("./test.txt", { encoding: "utf8" });

engine.executeOnText(testStr).then((results) => {
  const messages = results[0].messages;
  messages.forEach((message) => {
    console.log(message);
  });

  if (engine.isErrorResults(results)) {
    const output = engine.formatResults(results);
    console.log(output);
  }
});
