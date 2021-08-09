import express from "express";
const router = express.Router();

import { proofreadText } from "../../lib/textlint.js";

router.get("/", (req, res) => {
  res.json({
    message: "Hello World！！！！！",
  });
});

router.post("/proofread", (req, res) => {
  const text = req.body.text;
  proofreadText(text).then(
    (resultMessages) => {
      res.json({
        requestText: text,
        resultMessages: resultMessages,
      });
    },
    (error) => {
      res.json({
        message: error.message,
      });
    }
  );
});

export default router;
