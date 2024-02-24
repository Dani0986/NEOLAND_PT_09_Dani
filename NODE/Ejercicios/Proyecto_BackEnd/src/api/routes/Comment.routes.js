const express = require("express");
const { isAuth } = require("../../middleware/auth.middleware");
const {
  createComment,
  deleteComment,
} = require("../controllers/Comment.controller");

const CommentRoutes = express.Router();

CommentRoutes.post("/create/:idRecipient", [isAuth], createComment);
CommentRoutes.delete("/delete/:id", deleteComment);

module.exports = CommentRoutes;
