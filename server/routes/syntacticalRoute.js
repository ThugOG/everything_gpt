import express from "express";
import * as dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";

const router = express.Router();

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

router.route("/check").get((req, res) => {
  res.status(200).json({
    message: "200 grammer",
  });
});
router.route("/check").post(async (req, res) => {
  try {
    const { input, instruction } = req.body;
    const response = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: input,
      instruction: instruction,
    });
    console.log(response)
    return res.status(200).json({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    return res
      .status(500)
      .send(error?.response?.data?.error?.message || "Something went wrong");
  }
});

export default router;
