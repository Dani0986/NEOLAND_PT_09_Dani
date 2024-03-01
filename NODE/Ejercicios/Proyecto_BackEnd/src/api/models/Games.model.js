
const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, require: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    released: { type: Boolean},
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    image: { type: String, required: false },
    games: [{ type: mongoose.Schema.Types.ObjectId, ref: "Game" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

  },
  
  
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;