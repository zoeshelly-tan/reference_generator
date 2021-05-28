const router = require("express").Router();
// const postsController = require("../../../../../../uadel-adel-fsf-pt-11-2020-u-c/week_20/01-Activities/22-Stu_Mini_Project/Solved/controllers/postsController");
const userController = require("../../controllers/userController");
const { create } = require("../../models/User");

// Matches with "/api/login"
router
  .route("/")
  .post(userController.login)
//   .get(userController.checkPassword)
//   .post(postsController,create)

// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;