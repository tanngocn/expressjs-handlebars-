class NewsController {
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("");
  }
}

module.exports = new NewsController();
