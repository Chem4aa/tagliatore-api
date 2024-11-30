import {Router} from "express"
import { methods as platillosController } from "../controllers/platillos.js"

const router = Router()

router.get("/api/platillos", platillosController.getPlatillos)
router.get("/api/platillo/:id", platillosController.getPlatillo)
router.post("/api/addPlatillo", platillosController.addPlatillo)
router.delete("/api/delPlatillo", platillosController.delPlatillo)
router.put("/api/updatePlatillo", platillosController.updatePlatillo)

export default router