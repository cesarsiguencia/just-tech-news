const path = require('path'); //for css to work
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars'); // to use handlebars in express
const hbs = exphbs.create({}); // 

const app = express();
const PORT = process.env.PORT || 3320;

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false, //forces session to be saved to sessionStore, just keep false 
  saveUninitialized: true, //new sessions will be saved to part of Store
  store: new SequelizeStore({ //initialize sequelize.Store, connect with db, and save session to database
    db: sequelize
  })
};

app.use(session(sess));

//CSS COMES BEFORE HANDLEBARS
app.use(express.static(path.join(__dirname, 'public'))) //middleware that takes all content of the 'public' folder and serve them as static assets

app.engine('handlebars', hbs.engine); // more handlebars stuff
app.set('view engine', 'handlebars'); // more handlebars stuff

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);



// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT 3320'));
});



// THIS WAS THE SERVER PAGE BEFORE INCLUDING THE WHOLE MVC MODEL, SO JUST THE BACK END

// const express = require('express');
// const routes = require('./routes');
// const sequelize = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3320;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(routes);


// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening on PORT 3320'));
// });