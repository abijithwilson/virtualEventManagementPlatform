const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const User = require("./user.model");

const Event = db.define(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    eventDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    eventTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.hasMany(Event);
Event.belongsTo(User);

module.exports = Event;
