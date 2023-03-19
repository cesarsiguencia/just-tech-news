const { userSeeds } = require('./user-seeds')
const { postSeeds } = require('./post-seeds')
const { commentSeeds } = require('./comment-seeds')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: false });
    console.log('Database Synced -----')

    await userSeeds();
    console.log('Users synced ------')

    await postSeeds();
    console.log('Posts synced ------')

    await commentSeeds();
    console.log('Comments synced ------')
}

seedAll();

