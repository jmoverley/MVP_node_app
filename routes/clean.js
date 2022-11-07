const feedModel = require('../models/feeds.js');

module.exports = (app) => {

    // Handling data after submission of form
    app.get("/clean", function (req, res) {
        feedModel.remove({}, function(err, result) {
            if (err) {
              console.err(err);
            } else {
              res.json(result);
            }
          });      
    });
}