import express from "express"

const router = express.Router()

import userControllers from "../controllers/userControllers.js"

router.get("/", userControllers.browse)
router.get("/:id", userControllers.read)
router.put("/:id", userControllers.edit)
router.post("/", userControllers.add)
router.delete("/:id", userControllers.destroy)

export default router
