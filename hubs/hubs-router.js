const express = require('express');
const router = express.Router();
const Hubs = require('./hubs-model.js');

router.get('/api/posts', (req, res) => {
    console.log(req.query);
    Hubs.find()
        .then(hubs => {
            res.status(200).json(hubs);
        })
        .catch(error => {
            // log error to database
            console.log(error);
            res.status(500).json({
                message: 'Error retrieving the hubs',
            });
        });
});

router.get("/api/posts/:id", (req, res) => {
    Hubs.findById(req.params.id)
    .then(hub => {
        if(hub){
           return res.status(200).json(hub)
        } else {
            res.status(404).json({ message: "The post with the specified ID does not exist." })
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: "The post information could not be retrieved." })
    })
})

module.exports = router;