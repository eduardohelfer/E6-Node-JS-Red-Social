const router = require('express').Router()

const postServices = require('./posts.services')
const likeServices = require('../likes/likes.services')
const commentServices = require('../comments/comments.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(postServices.getAllPosts)
    .post(passportJWT.authenticate('jwt', { session: false }), postServices.postNewPost)

router.route('/:id')
    .get(postServices.getPostById)
    .patch(passportJWT.authenticate('jwt', { session: false }), postServices.patchPost)
    .delete(passportJWT.authenticate('jwt', { session: false }), postServices.deletePost)

router.route('/:id/likes')
    .get(likeServices.getAllLikesByPost)
    .post(passportJWT.authenticate('jwt', { session: false }), likeServices.postLike)

router.route('/:id/comments')
    .get(commentServices.getAllCommentsByPost)
    .post(passportJWT.authenticate('jwt', { session: false }), commentServices.postComment)

module.exports = router