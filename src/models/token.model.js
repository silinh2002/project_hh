var mongoose = require("mongoose");

var tokenSchema = new mongoose.Schema(
  {
    user_id: String,
    token: String,
    expires_in: Number,
    create_at: Date,
    updated_at: Date,
    is_deleted: Boolean,
  },
  { versionKey: false }
);

var Tokens = mongoose.model("Tokens", tokenSchema, "tokens");

module.exports = {
  findByLamda: async function (lambda) {
    return await Tokens.find(lambda);
  },
  createByLamda: async function (lambda) {
    return await Tokens.insertMany(lambda);
  },
  updateByLamda: async function (id, lambda) {
    return await Tokens.updateOne(id, lambda);
  },
  deleteByLamda: async function (lambda) {
    return await Tokens.deleteOne(lambda);
  },
};
