const Course = require("./../models/Course");
const { muptipleMongooseToObject } = require("../../util/mongoose");
// module.exports = new SiteController();
function SiteController() {
  return {
    index: function (req, res, next) {
      Course.find({})
        .then((courses) =>
          res.render("home", {
            courses: muptipleMongooseToObject(courses),
          })
        )
        .catch(next);
    },
    search: function (req, res) {
      res.render("search");
    },
  };
}

module.exports = SiteController();
