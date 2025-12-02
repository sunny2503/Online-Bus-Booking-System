const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const BusOwnerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "busowner",
    required: true,
  },
})

BusOwnerSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});


module.exports = mongoose.model("BusOwner", BusOwnerSchema);