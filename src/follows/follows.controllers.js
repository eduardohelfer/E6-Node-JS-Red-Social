const uuid = require('uuid')

const Follows = require('../models/follows.models')
const Users = require('../models/users.models')

const followUser = async (follower, following) => {
  const data = await Follows.create({
    id: uuid.v4(),
    userId: follower,
    userId2: following
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
      as: 'Follower',
      attributes: ['id', 'firstName', 'lastName']
    }
  })
  return data
}

const findMyFollowings = async (userId) => {
  const data = await Follows.findAll({
    where: {
      follower: userId
    },
    include: {
      model: Users,
      as: 'Followed',
      attributes: ['id', 'firstName', 'lastName']
    }
  })
  return data
}

module.exports = {
  followUser,
  findMyFollowers,
  findMyFollowings
}

/* 

const uuid = require('uuid')

const Follows = require('../models/follows.models')
const Users = require('../models/users.models')

const followUser = async (follower, following) => {
    const data = await Follows.create({
        id: uuid.v4(),
        userId: follower,
        userId2: following
    })
    return data
}

const findMyFollowers = async (userId) => {
    const data = await Follows.findAll({
        where: {
            userId2 : userId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        }
    })
    return data.map(item => item.user)
}

const findMyFollowings = async (userId) => {
    const data = await Follows.findAll({
        where: {
            userId : userId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        }
    })
    return data.map(item => item.user)
}



module.exports = {
    followUser,
    findMyFollowers
}

*/

