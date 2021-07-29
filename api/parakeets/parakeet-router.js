const express = require('express');
const router = express.Router();
const Birds = require('./parakeet-model');

router.get('/', (req, res) => {
    Birds.allParakeets()
    .then(birds => {
        res.status(200).json(birds)
    })  
    .catch(err => {
        res.status(500).json({message: err})
    })
})

router.post('/', (req, res, next) => {
    const bird = req.body;

    Birds.addParakeet(bird)
        .then(newBird => {
            res.status(201).json(newBird)
        })
        .catch(error => {
            res.status(500).json({message: error})
        })
})

module.exports = router;