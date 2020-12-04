const common = require('common');
const Spot = common.mongoose.model('Spot');



module.exports = {

	create: function(req, res){
		const spot = new Spot();
		spot.name = req.name;
		spot.desc = req.desc;
		spot.lat = req.lat;
		spot.lon = req.lon;

		//
		if(spot.name == null || spot.lat == null || spot.lon == null){
			return res.status(404).send({
				message: "Name, lat, lon are required ! ",
			});
		}

		spot
			.save()
			.then((data) => {
				res.send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || "Some error occurred while creating the spot",
				});
			});
		
	},

	read: function (req, res) {
    	Spot.findById(req.params.id)
    		.then((spot) => {
    			if (!spot) {
    				return res.status(404).send({
    					message: "Spot not found with id " + req.param.id,
    				});
    			}
    			res.status(200).send(spot);
    			//console.log(spot);
    		})
    		.catch((err) => {
    			return res.status(500).send({
    				message: "Error not found spot with id " + req.param.id,
    			});
    		});
  	},


  	delete: function (req, res) {
  		Spot.findByIdAndRemove(req.param.id)
  			.then((spot) => {
  				if(!spot) {
  					return res.status(404).send({
  						message: "Spot not found ",
  					});
  				}
  				res.send({ message: "Spot deleted successfully! "});
  			})
  			.catch((err) => {
  				return res.status(500).send({
  					messge: " Could not delete spot ",
  				});
  			});
  	},

  	update: function(req, res) {
  		if(!req.name || !req.desc || !req.lat || !req.lon) {
  			res.status(400).send({
  				message: "required fields cannot be empty",
  			});
  		}
  		Spot.findByIdAndUpdate(req.param.id, req, {new: true})
  			.then((spot) => {
  				if (!spot) {
  					return res.status(404).send({
  						message: "Spot not found",
  					});
  				}
  				res.status(200).send(spot);
  			})
  			.catch((err) => {
  				return res.status(404).send({
  				});
  			});
  	}
}