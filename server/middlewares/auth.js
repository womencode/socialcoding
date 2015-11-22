module.exports = function(req, res, next) {
  // TODO: Authentication check goes here

  //if (req.user) {
    next();
  //} else {
  //  res.status(401).end()
  //}
};
