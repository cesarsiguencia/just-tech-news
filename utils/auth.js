const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next(); //for other middleware to pass through when we are calling various routes. This withAuth middleware function will trigger first before any other middleware functions our requests have to pass through
    }
};
  
module.exports = withAuth;