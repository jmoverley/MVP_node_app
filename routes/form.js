const feedModel = require('../models/feeds.js');

module.exports = (app) => {

    // Handling get request
    app.get('/', function (req, res) {
        // Rendering your form
        res.render('feedback_form');
    });

    // Handling data after submission of form
    app.post("/feedback_form", function (req, res) {
        const feedData = new feedModel({
            name: req.body.name,
            email: req.body.email,
            feed: req.body.feedback
        });
        feedData.save()
            .then(data => {
                res.render('feedback_form',
    { msg: "Your feedback successfully saved." });
            })
            .catch(err => {
                res.render('feedback_form',
                    { msg: "Check Details." });
            });
    })

}