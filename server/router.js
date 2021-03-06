const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

const Polls = require('./controllers/polls');

module.exports = function(app) {
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.get('/polls', Polls.fetchAllPolls);
  app.get('/polls/:id', Polls.fetchPollById);
  app.post('/newpoll', Polls.createNewPoll);
  app.post('/deletepoll', Polls.deletePoll);
  app.post('/polls/:id', Polls.voteForPoll);
  app.post('/polls/AddOption/:id', requireAuth, Polls.addPollOption);
}
