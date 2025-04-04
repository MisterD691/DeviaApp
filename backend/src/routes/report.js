const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByUser,
  getAll,
  update,
  remove
} = require("../controllers/report");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByUserId/:userId", getByUser);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
