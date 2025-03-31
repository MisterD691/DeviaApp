const express = require("express");
const router = express.Router();

const {
  add,
  getById,
  getByReport,
  getAll,
  update,
  remove
} = require("../controllers/sendingHistory");

router.post("/add", add);
router.get("/getById/:id", getById);
router.get("/getByReportId/:reportId", getByReport);
router.get("/getAll", getAll);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

module.exports = router;
