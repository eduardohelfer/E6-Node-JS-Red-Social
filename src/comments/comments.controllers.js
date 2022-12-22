const uuid = require('uuid')
const Comments = require('../models/comments.models')
const Users = require('../models/users.models')

const findAllCommentsFromPost = async (postId) => {
  const data = await Comments.findAll({
    where: {
      postId: postId
    },
    attributes: ['id', 'content'],
    order: [
      ['createdAt', 'ASC']
    ],
    include: [
      {
        model: Users,
        attributes: ['firstName', 'lastName']
      }
    ]
  })
  return data
}

const createComment = async (obj) => {
  const data = await Comments.create({
    id: uuid.v4(),
    userId: obj.userId,
    postId: obj.postId,
    content: obj.content
  })
  return data
}

module.exports = {
  findAllCommentsFromPost,
  createComment
}

