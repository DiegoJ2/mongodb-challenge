const mongoose = require('mongoose');

const schema = new mongoose.Schema(
{
title: {type: String, default:""},
author: {type: String, default:""},
note: {type: String, deault:""},
},
{
timestamps:{
createdAt: "createdOn",
updatedAt: "updatedOn",
},
toJSON:{ virtuals: true},
toObject:{ virtuals: true },
}
);

constBlogModel = mongoose.model('blogs-challenge', schema);

module.exports = BlogModel;