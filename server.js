const helpers = require('./utils/helpers')
const path = require('path'); 
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({helpers}); // 

const app = express();

const PORT = 3320 || process.env.PORT;

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'random string of characters and numbers',
  cookie: {},
  resave: false,
  saveUninitialized: true, 
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public'))) 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
