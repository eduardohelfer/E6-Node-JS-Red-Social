const uuid = require('uuid')

const Follows = require('../models/follows.models')
const Users = require('../models/users.models')

const followUser = async (follower, following) => {
  const data = await Follows.create({
    id: uuid.v4(),
    follower: follower,
    followed: following
  })
  return data
}

const findMyFollowers = async (userId) => {
  const data = await Follows.findAll({
    where: {
      followed: userId
    },
    include: {
      model: Users,
      as: 'FollowerUsers',
      attributes: ['id', 'firstName', 'lastName']
    }
  })
  return data.map(item => item.FollowerUsers)
}

const findMyFollowings = async (userId) => {
  const data = await Follows.findAll({
    where: {
      follower: userId
    },
    include: {
      model: Users,
      as: 'FollowedUsers',
      attributes: ['id', 'firstName', 'lastName']
    }
  })
  return data.map(item => item.FollowedUsers)
}

module.exports = {
  followUser,
  findMyFollowers,
  findMyFollowings
}

