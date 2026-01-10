const express = require("express")
const contactsController = require("../controllers/contactsController")

const router = express.Router()

router.get("/", contactsController.getAllUsers)

router.get("/:id", contactsController.getUserById)

module.exports = router