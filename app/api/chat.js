import { Configuration, OpenAIApi } from "openai";


export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { message } = req.body;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Secure API Key from .env.local
  });

  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-4o",
      messages: [{ role: "user", content: message }],
      max_tokens: 100,
    });

    res.status(200).json({ reply: response.data.choices[0].message.content.trim() });
  } catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.message);
    res.status(500).json({ error: "Error communicating with OpenAI" });
  }
}


export default function handler(req, res) {
    res.status(200).json({ message: "API is working!" });
  }
  