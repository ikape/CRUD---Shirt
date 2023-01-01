const express = require("express")
const router = express.Router()
const Shirts = require("../Controller/shirtsController")

router.post('/', Shirts.createShirt)


router.get("/", Shirts.findAllShirt)
router.get("/:id", Shirts.findOneShirt)


router.put("/:id", Shirts.updateShirt)


router.delete("/:id", Shirts.deleteShirt)
// router.delete("/:id", Shirts.deleteAllShirt)

module.exports = router

