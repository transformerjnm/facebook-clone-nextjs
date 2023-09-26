const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    email: String,
    password: String
}, {collection: 'Users'})

UserSchema.pre('save', function(next){
    if(this.isModified('password')){
        this.password = bcrypt.hash(this.password, 10, (err, hash) => {
            if(err){ return next(err)}

            this.password = hash
            next()
        })
    }      
})

UserSchema.methods.comparePassword = async function(password){
    if(!password) throw new Error('password is missing!')
    try{
        const result = bcrypt.compare(password, this.password)
        return result
    }catch(err){
        throw new err()
    }
}

UserSchema.statics.isThisEmailInUse = async function (email) {
    if (!email) throw new Error('Invalid Email');
    try {
      const user = await this.findOne({ email });
      if (user) return false;
  
      return true;
    } catch (error) {
      console.log('error inside isThisEmailInUse method', error.message);
      return false;
    }
  };

module.exports = mongoose.model('User', UserSchema)