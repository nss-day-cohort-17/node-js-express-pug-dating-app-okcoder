'use strict';

module.exports.show = (req, res) => {
  console.log(res.locals)
  res.render('dateForm');
}

module.exports.updatePrefs = (req, res) => {

}
