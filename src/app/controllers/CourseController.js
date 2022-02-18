const Course = require("./../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
function CourseController() {
  return {
    show: function (req, res, next) {
      Course.findOne({ slug: req.params.slug })
        .then((course) => {
          res.render("courses/show", { course: mongooseToObject(course) });
        })
        .catch(next);
    },
    create: function (req, res) {
      res.render("courses/create");
    },
    store: function (req, res) {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
      const course = new Course(formData);
      course
        .save()
        .then(() => res.redirect("/me/stored/courses"))
        .catch((error) => { });
    },
    edit: function (req, res, next) {
      Course.findById(req.params.id)
        .then((course) => {
          res.render("courses/edit", {
            course: mongooseToObject(course),
          });
        })
        .catch(next);
    },
    update: function (req, res, next) {
      Course.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.redirect("/me/stored/courses"))
        .catch(next);
    },
    // sofe delete
    destroy: function (req, res, next) {
      Course.delete({ _id: req.params.id })
        .then(() => res.redirect("back"))
        .catch(next);
    },
    // delete force
    forceDestroy: function (req, res, next) {
      Course.deleteOne({ _id: req.params.id })
        .then(() => res.redirect("back"))
        .catch(next);
    },

    restore: function (req, res, next) {
      Course.restore({ _id: req.params.id })
        .then(() => res.redirect("back"))
        .catch(next);
    },
  };
}

module.exports = CourseController();
