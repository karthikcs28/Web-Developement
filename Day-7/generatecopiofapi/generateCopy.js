import fetch from "node-fetch"
import dotenv from "dotenv"

dotenv.config()

export async function generateCopy(prompt) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "http://localhost",
      "X-Title": "wrapapi"
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        { role: "user", content: prompt }
      ]
    })
  })

  const data = await response.json()
  return data.choices[0].message.content
}
