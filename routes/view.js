const feedModel = require('../models/feeds.js');

module.exports = (app) => {

    // Handling data after submission of form
    app.get("/view", function (req, res) {
        feedModel.find().exec((err, feeds) => {
            res.render('feedback_view', { feeds: feeds});
        });        
    });
}