/* GET 'Home' page */
const homelist = (req, res) => {
  res.render('locations-list', { title: 'Loc8r - Find a Place' });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Starcups' });
};
/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
