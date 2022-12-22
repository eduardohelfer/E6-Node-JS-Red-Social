const commentControllers = require('./comments.controllers')

const getAllCommentsByPost = (req, res) => {
  const id = req.params.id
  commentControllers.findAllCommentsFromPost(id)
    .then(data => {
      if (data) {
        res.status(200).json({
          count: data.length,
          comments: data
        })
      } else {
        res.status(404).json({ message: 'Invalid ID' })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

const postComment = (req, res) => {
  const userId = req.user.id
  const postId = req.params.id
  const { content } = req.body
  commentControllers.createComment({ userId, postId, content })
    .then(data => {
      if (data) {
        res.status(201).json(data)
      } else {
        res.status(400).json({
          message: 'Comment not allowed',
          fields: {
            userId: "UUID",
            postId: "UUID",
            content: "String"
          }
        })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

module.exports = {
  getAllCommentsByPost,
  postComment
}
