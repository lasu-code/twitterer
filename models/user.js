const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdDate: {
        type: Date,
        default: Date.now
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);
