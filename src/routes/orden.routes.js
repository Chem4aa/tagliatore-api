import {Router} from "express"
import { methods as ordenController } from "../controllers/orden.js"

const router = Router()

router.get("/api/ordenes", ordenController.getOrdenes)
router.get("/api/orden/:id", ordenController.getOrden)
router.post("/api/addOrden", ordenController.crearOrden)
router.delete("/api/delOrden", ordenController.eliminarOrden)
router.put("/api/updateOrden", ordenController.actualizarOrden)

export default router