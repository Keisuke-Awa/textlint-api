import express from "express";
const router = express.Router();

import { proofreadText } from "../../lib/textlint.js";

router.post("/proofread", (req, res) => {
  const text = req.body.text;
  proofreadText(text).then((results) => {
    res.json({
      requestText: text,
      result: results,
    });
  });
});

export default router;
