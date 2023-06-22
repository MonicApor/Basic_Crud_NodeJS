const router = require('express').Router();
//declare the model as let dont use const as theres a chance that the model will be change using a middleware

let Health = require('../models/health');


//you can use a controller

//HOME
router.route('/').get((req, res) => {
    
    //find all health and store in health json
    Health.find()
        .then(health => res.json(health))
        .catch(err => res.status(400).json('Error: ' + err));
});

//ADD
router.route('/add').post((req, res) => {
    //get all the inputs
    // const {fullname, temperature, email, number} = req.body;
    const fullname = req.body.fullname;
    const temperature = req.body.temperature;
    const email = req.body.email;
    const number = req.body.number;


    //supply the inputs into the new health declared
    const newHealthDeclaration = new Health({ fullname, temperature, email, number });
    //save the new created health
    newHealthDeclaration.save()
        .then(health => res.json('New Health Record Added'))
        .catch(err => res.status(400).json('Error: : ' + err));
});

//GET ONE
router.route('/:id').get((req, res) => {
    //find the health and put in a health variable
    Health.findById(req.params.id)
        .then(health => res.json(health))
        .catch(err => res.status(400).json('Error:  ' + err));
})

//DELETE ONE
router.route('/:id').delete((req, res) => {
    Health.findByIdAndDelete(req.params.id)
        .then(health => res.json('Record Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));

})

//UPDATE ONE
router.route('/update/:id').post((req, res) => {
    //look for the id and pass it in a variable health
    Health.findById(req.params.id)
        .then(health => {

          health.fullname = req.body.fullname;
          health.temperature = req.body.temperature;
          health.email = req.body.email;
          health.number = req.body.number;

          health.save()
          //dont put it in a variable health since you only need to update the health
            .then(() => res.json("Health Record Updated"))
            .catch((err) => res.status(400).json("Error:  " + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;