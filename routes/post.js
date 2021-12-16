const express = require('express');
const router = express.Router();
const Post = require('../models/post');

//Get all post 
router.get('/', async(req, res) => {
        try {
            const posts = await Post.find().limit(10);
            res.json({ posts })

        } catch (err) {
            res.json({ massage: err })
        }
    })
    //Summits a post
router.post('/', async(req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savePost = await post.save()
            .then(data => {
                res.json(data);
            })
    } catch (err) {
        res.json({ massage: err })
    }
})

//speficific post
// router.get('/', async(req, res) => {
//     try {
//         const posts = await Post.find().limit(1);
//         res.json({ posts })

//     } catch (err) {
//         res.json({ massage: err })
//     }
// })
module.exports = router;










// this logic is used for create a new post