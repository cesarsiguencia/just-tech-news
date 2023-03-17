const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Post extends Model {
<<<<<<< HEAD
    // previously this was in the post-routes.js file under posts/upvote PUT command. But it was complicated with two sequelize functions in it, so now it is being moved here so that VOTES is part of POSTS
    static upvote(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id
          }).then(() => {
            return Post.findOne({
              where: {
                id: body.post_id
              },
              attributes: [
                'id',
                'post_url',
                'title',
                'created_at',
                [
                  sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
                  'vote_count'
                ]
              ]
            });
          });
    }
=======
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.post_id
        },
        attributes: [
          'id',
          'post_url',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'),
            'vote_count'
          ]
        ]
      });
    });
  }
}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;

