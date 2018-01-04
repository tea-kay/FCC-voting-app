const Poll = require('../models/poll');

exports.fetchAllPolls = (req, res, next) => {
  Poll.find({}, (err, polls) => {
    if (err) return res.send({ success: false, msg: 'Error reading db' })
    if (!polls || !polls.length) return res.send({ success: false, msg: 'No polls in db' })
    res.send({ success: true, msg: 'retrieved all polls', polls })
  });
}
