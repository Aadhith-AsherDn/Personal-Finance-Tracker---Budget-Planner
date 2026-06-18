const mongoose = require("mongoose");

const AutoIncrement = require("mongoose-sequence")(mongoose);

const loginSchema = new mongoose.Schema({
     userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    userEmail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    userPassword: {
      type: String,
      required: true,
      validate: {
        validator: function(value) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        },
        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
      }
    },
},
{
    timestamps:true
});
loginSchema.plugin(AutoIncrement, { inc_field: 'userId' });

module.exports = mongoose.model("login",loginSchema);