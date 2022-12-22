const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Comments = require('./comments.models')
const Follows = require('./follows.models')
// const Comments = require('./comments.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? Users - Posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Users - Likes
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    //? Posts - Likes 
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)

    //? Users -- Follows 
    Follows.belongsTo(Users, { foreignKey: 'follower', as: 'FollowerUsers' })
    Follows.belongsTo(Users, { foreignKey: 'followed', as: 'FollowedUsers' })

    //? Users - Comments
    Users.hasMany(Comments)
    Comments.belongsTo(Users)

    //? Posts - Comments 
    Posts.hasMany(Comments)
    Comments.belongsTo(Posts)
}

module.exports = initModels
