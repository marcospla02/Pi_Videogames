const { Router } = require("express");
const router = Router();
const getById = require("../controllers/getById");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await getById(id);
    !detail ? Error("No existe el id") : res.status(201).json(detail);
  } catch (error) {
    res.send({ Error: error.message });
  }
});

module.exports = router;
