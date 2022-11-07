"use strict";

const mongoose = require('mongoose'),
        Schema = mongoose.Schema;

// Create schema
const feedSchema = mongoose.Schema({
    name: String,
    email: String,
    feed: String
},
{
    timestamps: true
});

module.exports = mongoose.model("feeds", feedSchema);