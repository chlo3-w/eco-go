require('./models/User');
require('./models/Track');
require('./models/Challenge');
require('./models/Blog');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const challengeRoutes = require('./routes/challengeRoutes');
const blogRoutes = require('./routes/blogRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
app.use(challengeRoutes);
app.use(blogRoutes);

const mongoUri =
  'mongodb+srv://admin:passwordpassword@cluster0-olp13.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', err => {
  console.error('Error connecting to mongo', err);
});

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});