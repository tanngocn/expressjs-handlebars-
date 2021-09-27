const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_dev");
    console.log("connect success");
  } catch (error) {
    console.log(error, "connect fail");
  }
}

module.exports = { connect };
