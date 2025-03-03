const mongoose = require("mongoose");

const bcrypt =  require("bcryptjs");

const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, role: {
        type: String,
        enum: ['Manager', 'Operator', 'manager', 'operator'], // Add lowercase values too
        required: true
      }
      , required: true },
    department: { type: String, required: true }


} , {timestamps : true}); 

// Password Hasing Before saveing 

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password);

};

const User = mongoose.model("User" , userSchema);
// export default User;


module.exports = User