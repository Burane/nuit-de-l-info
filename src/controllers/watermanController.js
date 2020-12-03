const common = require('./common');
const Waterman = common.mongoose.model('Waterman')
const bcrypt = require('bcrypt');
const { hashPassword } = require('./common');



module.exports = {
  
  create: async function (req, res) {
    try {
      await common.dbConnect()
      const waterman = new Waterman();
      waterman.username = req.params.username;
      waterman.firstName = req.params.firstName;
      waterman.lastName = req.params.lastName;
      waterman.mail = req.params.mail;
      waterman.birthDate = req.params.birthDate

      //Password hashing
      if (req.startedPractice) {
        waterman.startedPractice = req.params.startedPractice
      }
      hashres = await hashPassword(req.params.passworld)
      waterman.passwordHash = hashres.hash
      waterman.passwordSalt = hashres.salt
      waterman.save();
      res.send({ status: "OK" })
    }
    catch {
      res.send({ status: "NOK" })
    }
    
  },
  read: async function (req, res) {
    await common.dbConnect()
    const result = await Waterman.findById(req.params.id).exec();
    delete result.hash;
    delete result.salt;
    res.send(result)
  },


  delete: async function (req, res) {
    await common.dbConnect()
    try {
      await Waterman.findByIdAndDelete(req.params.id)
      res.send({status:"OK"})
    }
    catch {
      res.send({status:"NOK"})
    }

  }
}