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

exports.createNewPoll = (req, res, next) => {
  const { title, ownedBy, options: optionsArray } = req.body;
  const options = {};

  optionsArray.forEach(option => {
    options[option] = 0;
  });

  const newPoll = new Poll({
    title,
    ownedBy,
    options,
    votedBy: []
  });

  newPoll.save(err => {
    if (err) return next(err);
    res.send({
      success: true,
      msg: 'Successfully saved new poll',
      poll: newPoll
    });
  });
}

exports.deletePoll = (req, res, next) => {
  const { _id } = req.body;

  Poll.findByIdAndRemove(_id, (err, poll) => {
    if (err) return next(err);
    if (!poll) return res.status(422).send({
      success: false,
      msg: "Poll ID does not exist"
    });
    res.send({
      success: true,
      msg: "Poll has been deleted"
    });
  })

};

exports.voteForPoll = (req, res, next) => {
  const { id } = req.params;
  const { voteOption, voter } = req.body;
  console.log('the body', { voteOption, voter })
  const update = { $inc: { [`options.${voteOption}`]: 1 }, $push: { votedBy: voter } };
  const config = { new: true };

  Poll.findByIdAndUpdate(id, update, config, (err, poll) => {
    if (err) return next(err);
    if (!poll) return res.status(404).send({ success: false, msg: 'Poll ID does not exist' });
    res.send({
      success: true,
      poll
    });
  });

}
