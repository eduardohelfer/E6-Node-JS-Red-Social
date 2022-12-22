const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
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
    Follows.belongsTo(Users, { foreignKey: 'userId', as: 'Follower' })
    Follows.belongsTo(Users, { foreignKey: 'userId2', as: 'Followed' })

}

module.exports = initModels
