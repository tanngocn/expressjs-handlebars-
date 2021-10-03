const Course = require("../models/Course");
const { muptipleMongooseToObject } = require("../../util/mongoose");
function MeController() {
  return {
    storedCourses: function (req, res, next) {
      Course.find({})
        .then((courses) => {
          res.render("me/stored-courses", {
            courses: muptipleMongooseToObject(courses),
          });
        })
        .catch(next);
    },
  };
}
module.exports = MeController();
