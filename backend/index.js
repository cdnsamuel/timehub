import "dotenv/config.js"

import app from "./src/app.js"

const port = parseInt(process.env.APP_PORT)

app.listen(port, (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Server is running on port ${port} 🚀`)
  }
})
