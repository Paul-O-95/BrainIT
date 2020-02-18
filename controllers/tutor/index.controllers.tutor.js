module.exports = {
  home(req, res) {
    const viewModel = {};
    res.render('index', viewModel);
  }
};
