# Just Tech News by CS

---------------

Welcome to my first social media application and my first full stack project using front end, back end, and database technologies! This app follows the Model-View-Controller layout for easy distinction of file hierarchy. 

This media app is designed for aspiring web developers to interact with each other and share noteworthy tech news through links. 
<br/>

Users are able to
- Login using their email and password used at the time of signing up
- Create posts
- Comment on any posts
- Upvote on any posts
- Change title of their created posts through the 'DASHBOARD'
- Delete a post and it's associated comments and upvotes through the 'DASHBOARD"


Non users (the general public, VIEW MODE) are able to
- Sign up using their email, password, and a unique username to gain all previously stated user priviledges 
- See all posts from all users at the homepage along with number of points (upvotes) and comments per posts while remaining logged out
- Read all associated comments and their authors per post by clicking on the post while remaining logged out
<br/>

To create an account and contribute, click on the link below and navigate to 'Login' at the upper right corner to sign up.
Note: Your email will NOT be used for any other purposes other than for the sign up.


To create your own copy of this application instead of using the link, please check installation instructions at the bottom.


### Technologies Used
- Express
- Sequelize
- MySQL
- Bcrypt
- Handlebars
- Dotenv



### Tables/Models in Database
- Users
- Posts
- Comments
- Votes

### Link
https://just-tech-news-by-cs.herokuapp.com/ 

### Installation with Accompanying Data (Seeds)
1) Git clone or download the application and load on VSCode
2) Open your command line, go to the application directory, and run 'npm install'.
    - If this is your first time installing MySQL, please navigate to their documentation for proper installation into your computer and credential creation.
3) Change your package.json scripts to your chosing, preferred to include "start" : "node server.js" as one of your scripts.
4) Create an .env file at the root of the app for Dotenv to run your MySQL credentials for the database. Then in the .env file, type the following and save:
    DB_NAME='just_tech_news_db'
    DB_USER='(YOUR MYSQL USERNAME)'
    DB_PW='(YOUR MYSQL PASSWORD)'
5) Load the MySQL shell in the command line and type the following command to download the original database. Then quit the shell.
    - SOURCE db/schema.sql
6) Navigate to server.js and change the value of 'force: false' under the sequelize.sync function to 'force: true'. Save the file.
7) Run 'npm run seeds' in the command line for the database to be synced with its stock data.
8) Revert the value of 'force: true' back to 'force: false' in serber.js. Save the file.
9) Run 'npm start' in the command line, then navigate to browser and go to http://localhost:3320


### Screenshots

![Screenshot 1](/screenshots/ss-1.png)

![Screenshot 2](/screenshots/ss-2.png)

![Screenshot 3](/screenshots/ss-3.png)