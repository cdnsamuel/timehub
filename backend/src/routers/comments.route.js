import express from "express"

const router = express.Router()

import commentControllers from "../controllers/commentControllers.js"

router.get("/", commentControllers.browse)
router.get("/:id", commentControllers.read)
router.post("/", commentControllers.add)
router.delete("/:id", commentControllers.destroy)
router.put("/:id", commentControllers.edit)

export default router
