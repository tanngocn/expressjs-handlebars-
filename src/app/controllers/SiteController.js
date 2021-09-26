// class SiteController {
//   index(req, res) {
//     res.render("home");
//   }
//   search(req, res) {
//     res.render("search");
//   }
// }

// module.exports = new SiteController();
function SiteController() {
  return {
    index: function (req, res) {
      res.render("home");
    },
    search: function (req, res) {
      res.render("search");
    },
  };
}

module.exports = SiteController();
