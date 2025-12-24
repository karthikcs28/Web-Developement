import express from "express"

const app = express()
const PORT = 3000

app.get("/api/generate-copy", (req, res) => {
  const section = req.query.section

  if (!section) {
    return res.status(400).json({
      error: "section query parameter is required"
    })
  }

  let responseText = ""

  if (section === "hero") {
    responseText = {
      headline: "Build Faster. Launch Smarter.",
      subheading: "AI-powered tools to craft high-impact digital experiences in minutes."
    }
  } else if (section === "features") {
    responseText = {
      points: [
        "AI-generated UX copy",
        "Fast API response",
        "Simple integration",
        "Developer-friendly design"
      ]
    }
  } else if (section === "footer") {
    responseText = {
      text: "© 2025 AI Copy Engine. Built for modern product teams."
    }
  } else {
    responseText = {
      message: `No AI copy available for section: ${section}`
    }
  }

  res.json({
    section,
    aiGeneratedCopy: responseText
  })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
