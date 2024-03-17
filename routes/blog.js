const express = require('express');
const Router = express.Router(); // Define Router as an instance of express.Router()

// Require controller modules.
const { dummyLink } = require("../controllers/likeController");
const { createComment } = require('../controllers/commentController');
const {createPost} = require('../controllers/postController');

if (!dummyLink) {
    console.error("Error: dummyLink is not defined in likeController module.");
}

if (!createComment) {
    console.error("Error: createComment is not defined in commentController module.");
}

if (!createPost) {
    console.error("Error: createPost is not defined in commentController module.");
}

Router.get('/dummylink', dummyLink);
Router.post('/comment/create', createComment);
Router.post("/post/create", createPost);

module.exports = Router;
