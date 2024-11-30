import {Router} from "express"
import { methods as categoriasController } from "../controllers/categorias.js"

const router = Router()

router.get("/api/categorias", categoriasController.getCategorias)
router.get("/api/categoria/:id", categoriasController.getCategoria)
router.post("/api/addCategoria", categoriasController.addCategoria)
router.delete("/api/delCategoria", categoriasController.delCategoria)
router.put("/api/updateCategoria", categoriasController.updateCategoria)

export default router