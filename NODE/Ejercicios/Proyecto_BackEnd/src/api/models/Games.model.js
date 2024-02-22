
const mongoose = require("mongoose");

const GamesSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, require: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    released: { type: Boolean},
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Games = mongoose.model("Games", GamesSchema);

module.exports = Games;