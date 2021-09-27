function CourseController() {
  return {
    show: (req, res) => {
      res.send("this is detail course");
    },
  };
}

module.exports = CourseController();
