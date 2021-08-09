import express from "express";
const router = express.Router();

// import { proofreadText } from "../../lib/textlint.js";
import { TextLintEngine } from "textlint";

const engine = new TextLintEngine();

async function proofreadText(text) {
  const results = await engine.executeOnText(text);
  return results[0].messages;
}

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.post("/proofread", (req, res) => {
  const text = req.body.text;
  proofreadText(text).then((resultMessages) => {
    res.json({
      requestText: text,
      resultMessages: resultMessages,
    });
  });
});

export default router;
