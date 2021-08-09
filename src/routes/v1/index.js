import express from "express";
const router = express.Router();

import { proofreadText } from "../../lib/textlint.js";

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
