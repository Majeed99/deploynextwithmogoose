const mongoose = require("mongoose");

const planetSchema = {
  PlanetName: { type: String, require: [true, "Please planetName is require"] },
  NumberOfMoon: {
    type: Number,
    require: [false],
    default: 0,
  },
  LengthOfDay: {
    type: Number,
    require: [false],
    default: 0,
  },
};
module.exports =
  mongoose.models.planet || mongoose.model("planet", planetSchema);
