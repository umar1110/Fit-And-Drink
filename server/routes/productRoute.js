import express  from "express" 
import { createProduct, deleteProduct, getAllProducts,changeFeatured } from "../constrollers/productControllers.js";
import { productImages} from "../middlewares/multer.js";

const router = express.Router();


router.route("/products").get(getAllProducts).post(productImages ,createProduct)

router.route("/product/:id").delete(deleteProduct).put(changeFeatured)




export default router;