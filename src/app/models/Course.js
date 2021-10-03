const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 255 },
    slug: { type: String, slug: "name", unique: true },
    videoId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
