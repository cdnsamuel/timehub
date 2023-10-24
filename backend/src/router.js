import express from "express"

const router = express.Router()

import userRoutes from "./routers/users.route.js"
import postRoutes from "./routers/posts.route.js"
import commentRoutes from "./routers/comments.route.js"

router.use("/api/users", userRoutes)
router.use("/api/posts", postRoutes)
router.use("/api/comments", commentRoutes)

export default router
