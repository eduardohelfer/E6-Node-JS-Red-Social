const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = require('./users.models')

const Follows = db.define('follows', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  follower: {
    type: DataTypes.UUID,
    allowNull: false,
    // field: 'follower',
    references: {
      key: 'id',
      model: Users
    },
    comment: 'follower users'
  },
  followed: {
    type: DataTypes.UUID,
    allowNull: false,
    // field: 'followed',
    references: {
      key: 'id',
      model: Users
    },
    comment: 'followed users'
  }
}, {
  uniqueKeys: {
    follows_unique: {
      fields: ['follower', 'followed']
    }
  }
}
)

module.exports = Follows
