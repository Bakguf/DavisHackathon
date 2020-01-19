const router = require('express').Router();
let instance = require('../models/instance.model');

router.route('/').get((req, res) => {
    instance.find()
        .then(instances => res.json(instance))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newInstance = new instance({
        latitude,
        longitude,
        description,
        date,
    });

    newInstance.save()
        .then(() => res.json('Instance Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;