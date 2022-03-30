const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});




const app = express();
const PORT = process.env.PORT || 3320;

//CSS COMES BEFORE HANDLEBARS
app.use(express.static(path.join(__dirname,'public')))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);



// turn on connection to db and server

//force - this paramaters asks if we wish to DROP TABLE IF EXISTS everytime there are changes to our code, but if there are no changes, leave it on false
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on PORT 3320'));
});
