import express from "express";
import * as dotenv from "dotenv";
import { OpenAIApi, Configuration } from "openai";
const router = express.Router();

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);
router.route("/response").get((req, res) => {
    res.status(200).json({
      message: "OK",
    });
  });
router.route("/response").post(async (req, res) => {
    try{
        const {prompt} = req.body;
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}]
        })
        console.log(response.data.choices[0].message)
        return res.status(200).json({
            message: response.data.choices[0].message
        })
    }
    catch(error){
        res
      .status(500)
      .send(error?.response?.data?.error?.message || "Something went wrong");
    }
});

export default router