//DB Connect
module.exports = Object.freeze({

  mongoose: require('mongoose'),

  bcrypt: require('bcrypt'),

  dbConnect: async function () {
    await this.mongoose.connect('mongodb://localhost/501', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
  },

  hashPassword: async (password, salt) => {
    try {
      if (salt = undefined) {
        // Generate a salt
        salt = await this.bcrypt.genSalt(saltRounds = 10);
        // Hash password
        
      }
      return {
          salt: salt,
          hash: await this.bcrypt.hash(password, salt)
        }
    }
    catch {
      console.log("error when hashing password")
      return null
    }

  }
  
})