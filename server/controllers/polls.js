const Poll = require('../models/poll');

exports.fetchAllPolls = (req, res, next) => {
  Poll.find({}, (err, polls) => {
    if (err) return res.send({ success: false, msg: 'Error reading db' })
    if (!polls || !polls.length) return res.send({ success: false, msg: 'No polls in db', polls:[] })
    res.send({ success: true, msg: 'retrieved all polls', polls })
  });
}

exports.fetchPollById = (req, res, next) => {
  const { id } = req.params;
  Poll.findById(id, (err, poll) => {
    if (err) return res.send({ success: false, msg: 'Error reading from database' });
    if (!poll) return res.send({ success: false, msg: 'This poll ID does not exist', poll });
    res.send({ success: true, msg: 'retrieved poll', poll });
  });
}
