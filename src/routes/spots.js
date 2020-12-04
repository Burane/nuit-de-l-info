const express = require("express");
const router = express.Router();
const spotController = require("../controllers/spotController");


router.get("/:id", spotController.read);
router.post("/", spotController.create);
router.put("/:id", spotController.update);
router.delete("/:id", spotController.delete);
router.exports = router;