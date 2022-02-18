const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

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
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deleteAt: true, overrideMethods: 'all' })
module.exports = mongoose.model("Course", Course);
