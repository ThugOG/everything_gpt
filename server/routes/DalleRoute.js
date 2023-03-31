import express from "express";

import * as dotenv from "dotenv";

import { OpenAIApi, Configuration } from "openai";

const configuration = new Configuration({
  apiKey: "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",
});

const router = express.Router();
const openai = new OpenAIApi(configuration);
router.route("/dalle").get((req, res) => {
  res.status(200).json({
    message: "Dalle Fine",
  });
});
router.route("/dalle").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt)
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    // console.log(response.message);
    const image_url = response?.data?.data[0]?.url;
    res.status(200).json({ url: image_url });
  } catch (error) {
    res
      .status(500)
      .send(error?.response?.data?.error?.message || "Something went wrong");
  }
});

export default router;
