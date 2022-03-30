const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// define table columns and configuration
User.init(
  {
    // define an id column
    id: {
      // use the special Sequelize DataTypes object provide what type of data it is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto increment
      autoIncrement: true
    },
    // define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true
      }
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least four characters long
        len: [4]
      }
    }
  },
  { //TO PROTECT PASSWORD, hooks will initate after we have declared the data we are interested in creating, but BEFORE sequelize actually does it's thing down below
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData; //the 10 means how many times the password will be hashed
      },
      // set up beforeUpdate lifecycle "hook" functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData; //if the user decides to change their password
      } 
      //HOW DOES HASHING WORK? ITS DIFFERENT THAN ENCRYPTING. ENCRYPTING IS LIKE CRUBLING A PAPER EXCESSIVELY TO THE POINT WHERE ONE CAN'T RETRIEVE THEIR PAPER LIKE IT ONCE WAS, in this case, the password. HASHING DOES THE SAME THING, BUT THE PAPER IS CRUMBLED IN A VERY SPECIFIC MANNER. Password is basically manipulated and no longer contains the same data that it has when it was created. So when the user logins after they register, the password that they use to login is hashed to be the exact same hashed password that was created when they registered, so that the passwords can match. 
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;







// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// // create our User model
// class User extends Model {}

// // define table columns and configuration
// User.init(
//   {
//     // TABLE COLUMN DEFINITIONS GO HERE

//       // define an id column
//       id: {
//         // use the special Sequelize DataTypes object provide what type of data it is
//         type: DataTypes.INTEGER,
//         // this is the equivalent of SQL's `NOT NULL` option
//         allowNull: false,
//         // instruct that this is the Primary Key
//         primaryKey: true,
//         // turn on auto increment
//         autoIncrement: true
//       },
//       // define a username column
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false
//       },
//       // define an email column
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         // there cannot be any duplicate email values in this table
//         unique: true,
//         // if allowNull is set to false, we can run our data through validators before creating the table data
//         validate: {
//           isEmail: true
//         }
//       },
//       // define a password column
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           // this means the password must be at least four characters long
//           len: [4]
//         }
//       }
//   },
//   {
//     // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

//     // pass in our imported sequelize connection (the direct connection to our database)
//     sequelize,
//     // don't automatically create createdAt/updatedAt timestamp fields
//     timestamps: false,
//     // don't pluralize name of database table
//     freezeTableName: true,
//     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
//     underscored: true,
//     // make it so our model name stays lowercase in the database
//     modelName: 'user'
//   }
// );

// module.exports = User;