import {Router} from "express"
import { methods as clientesController } from "../controllers/clientes.js"

const router = Router()

router.get("/api/clientes", clientesController.getClientes)
router.get("/api/cliente/:id", clientesController.getCliente)
router.post("/api/addCliente", clientesController.addCliente)
router.delete("/api/delCliente", clientesController.delCliente)
router.put("/api/updateCliente", clientesController.updateCliente)

export default router