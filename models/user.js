const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
mongoose.promise = Promise

const userSchema = new Schema({
    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false }
});

userSchema.methods = {
    checkPass: function (inputPassword) {
        console.log('inputpassword', inputPassword)
        console.log('this.password', this.password)
        return(bcrypt.compareSync(inputPassword, this.password))
    },
    hashPass: function (plainTextPassword) {
        return(bcrypt.hashSync(plainTextPassword, 10))
    }
}

userSchema.pre('save', function(next){
    console.log('this', this)
        if (!this.password) {
            console.log('models/user.js //////PASSWORD NULL//////')
            next()
        } else {
            console.log('models/user.js hashPassword in pre save');
            this.password = this.hashPass(this.password)
            console.log('hashed pw', this.password)
            next()
        }
    })

const User = mongoose.model("User", userSchema);

    module.exports = User;