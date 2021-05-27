const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/login"
router
  .route("/")
  .get(userController.findOne)
  .get(userController,checkPassword);

// Matches with "/api/posts/:id"
// router
//   .route("/:id")
//   .get(postsController.findById)
//   .put(postsController.update)
//   .delete(postsController.remove);

module.exports = router;