const { User } = require("../db/models/user");
const router = require("express").Router();

router.get("/api/users", async (_, res) => {
  try {
    const users = await User.GetAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

router.post("/api/users", async (req, res) => {
  try {
    const user = await User.Create(req.body);
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

router.put("/api/users/:userId", async (req, res) => {
  const { userId } = req.query;

  try {
    const user = await User.Update({
      user_id: userId,
      ...req.body,
    });
    return res.status(200).send();
  } catch (err) {
    console.log(err);
    return res.status(500).send();
  }
});

module.exports = router;
