const { Comment } = require('../models')

const commentData = [
    {
        comment_text: "Congratulations on your first post!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Jealous of your portfolio! :)",
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: "Teach me how to do this!",
        user_id: 3,
        post_id: 3
    }
]

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = {
    commentSeeds
} 