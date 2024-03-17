const Post = require("../models/post.model.js");

exports.createPost = async(req, res) => {
    try {
        const {title, body} = req.body;
        const post = new  Post({
            title, body,
        });
        const savedPost = await post.save();

        res.json({
            post : savedPost,
        })
    } catch (error) {
        return re.status(400).json({
            error : "Error while creating post",
        })
    }
}