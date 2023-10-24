import express from "express"

const router = express.Router()

import postControllers from "../controllers/postControllers.js"

router.get("/", postControllers.browse)
router.get("/:id", postControllers.read)
router.put("/:id", postControllers.edit)
router.post("/", postControllers.add)
router.delete("/:id", postControllers.destroy)

export default router
