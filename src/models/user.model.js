const { DataTypes } = require("sequelize");
const { db } = require("../utils/connections");

const User = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "Invalid email format",
      },
    },
  },
  phone: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}, {
    timestamps: true
});

module.exports = User;
