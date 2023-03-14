const { User } = require('../models')
const bcrypt = require('bcrypt')

const userData = [
    {
        username: "CesarSig",
        email: "cesar@gmail.com",
        password: 'abcd1234'
    },
    {
        username: "Samantha",
        email: "sam@gmail.com",
        password: '1234abcd'
    },
    {
        username: "Anna",
        email: "anna@gmail.com",
        password: 'password'
    },
]

userData.map(async newUserData => {

    console.log(newUserData.password)
    return newUserData.password = await bcrypt.hash(newUserData.password, 10)
    
})

console.log(userData)

const userSeeds = () => User.bulkCreate(userData);





module.exports = {
    userSeeds
} 