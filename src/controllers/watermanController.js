const common = require('common');
const Waterman = common.mongoose.model('Waterman')
const bcrypt = require('bcrypt');
const { hashPassword } = require('./common');



module.exports = {
  
  create: function (req, res) {
    const waterman = new Waterman();
    waterman.username  = req.username;
    waterman.firstName = req.firstName;
    waterman.lastName = req.lastName;
    waterman.mail = req.mail;
    waterman.birthDate = req.birthDate

    //Password hashing
    if (req.startedPractice) {
      waterman.startedPractice = req.startedPractice
    }
    hashres = hashPassword(req.passworld)
    waterman.hash = hashres.hash
    waterman.salt = hashres.salt

    instance.save(function (err) {
    });
    
  },
  read: function (req, res) {
    
  },


  delete: function (req, res) {

  }
}