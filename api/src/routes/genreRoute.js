const { Router } = require("express");
const router = Router();
const getGenres = require("../controllers/getGenres");

router.get("/", async (req, res) => {
  try {
    const result = await getGenres();
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
});

module.exports = router;
