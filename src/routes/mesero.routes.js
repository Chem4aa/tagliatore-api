import {Router} from "express"
import { methods as meserosController } from "../controllers/mesero.js"

const router = Router()

router.get("/api/meseros", meserosController.getMeseros)
router.post("/api/addMesero", meserosController.crearMesero)
router.delete("/api/delMesero", meserosController.eliminarMesero)
router.put("/api/updateMesero", meserosController.actualizarMesero)
router.post("api/login", meserosController.loginMesero)

export default router