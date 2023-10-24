import mysql from "mysql2/promise"
import "dotenv/config"

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

pool.getConnection().catch(() => {
  console.warn("Failed to get a DB connection.")
})

const models = {}

import UserManager from "./UserManager.js"
import PostManager from "./PostManager.js"
import CommentManager from "./CommentManager.js"

models.post = new PostManager()
models.post.setDatabase(pool)

models.user = new UserManager()
models.user.setDatabase(pool)

models.comment = new CommentManager()
models.comment.setDatabase(pool)

const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop]
    }

    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1)

    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    )
  },
}

export default new Proxy(models, handler)
