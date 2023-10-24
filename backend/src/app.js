import fs from "node:fs"
import path from "node:path"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL, optionsSuccessStatus: 200 }))

import router from "./router.js"
app.use(router)

app.use(express.static(path.join(__dirname, "../public")))

const reactIndexFile = path.join(
  __dirname,
  "..",
  "..",
  "frontend",
  "dist",
  "index.html"
)

if (fs.existsSync(reactIndexFile)) {
  // serve REACT resources

  app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")))

  // redirect all requests to the REACT index file

  app.get("*", (req, res) => {
    res.sendFile(reactIndexFile)
  })
}

export default app
