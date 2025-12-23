const http = require("http")

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ status: "success", message: "API is working" }))
  }
})

server.listen(3000, () => {
  console.log("Server started on port 3000")

  http.get("http://localhost:3000/api", response => {
    let data = ""

    response.on("data", chunk => {
      data += chunk
    })

    response.on("end", () => {
      console.log("API Response in Terminal:")
      console.log(data)
      server.close()
    })
  })
})
