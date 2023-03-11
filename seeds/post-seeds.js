const { Post } = require('../models')

const postData = [
    {
        title: "My first post",
        post_url: "https://www.apple.com/",
        user_id: 1
    },
    {
        title: "Her first post",
        post_url: "https://www.youtube.com/",
        user_id: 2
    },
    {
        title: "My second post is cool",
        post_url: "https://cesarsiguencia.github.io/my-react-portfolio/",
        user_id: 1
    }
]

const postSeeds = () => Post.bulkCreate(postData);

module.exports = {
    postSeeds
} 