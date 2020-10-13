module.exports = function(sequelize, DataTypes) {
    var Rehab = sequelize.define("Rehab", {
      exercise: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      num_sets: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
        min: 1,
        }
    },
      num_reps: {
        type: DataTypes.INT,
        allowNull: false,
        validate: {
        min: 1,
        }
    }
  }),
  return Rehab;
};