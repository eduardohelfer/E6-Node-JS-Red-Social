const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = require('./users.models')

const Follows = db.define('follows', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'follower',
    references: {
      key: 'id',
      model: Users
    },
    comment: 'follower'
  },
  userId2: {
    type: DataTypes.UUID,
    allowNull: false,
    field: 'followed',
    references: {
      key: 'id',
      model: Users
    },
    comment: 'followed'
  }
}, {
  uniqueKeys: {
    Follows_unique: {
      fields: ['userId', 'userId2']
    }
  }
}
)

module.exports = Follows
