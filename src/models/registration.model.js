const { DataTypes } = require("sequelize");
const { db } = require("../utils/connection");
const Event = require("./event.model");
const User = require("./user.model");

const Registration = db.define("Registration", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  eventId: {
    type: DataTypes.INTEGER
  }
});
