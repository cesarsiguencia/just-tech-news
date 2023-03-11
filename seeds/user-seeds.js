const { User } = require('../models')

const userData = [
    {
        username: "CesarSig",
        email: "cesar@gmail.com",
        password: "abcd1234"
    },
    {
        username: "Samantha",
        email: "sam@gmail.com",
        password: "1234abcd"
    },
    {
        username: "Anna",
        email: "anna@gmail.com",
        password: "password"
    },
]

const userSeeds = () => User.bulkCreate(userData);

module.exports = {
    userSeeds
} 
