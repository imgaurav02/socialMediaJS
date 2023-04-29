const router = require("express").Router();
const Post = require("../models/Post")
const User = require("../models/User")
// create a post

router.post("/", async (req,res) => {
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})

// update a post

router.put("/:id", async (req,res) => {
    try{

        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await Post.updateOne({$set: req.body});
            res.status(200).json("post has been updated")
        }
        else{
            res.status(403).json("you can update only your post")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})

// delete the post 


router.delete("/:id", async (req,res) => {
    try{

        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await Post.deleteOne();
            res.status(200).json("post has been deleted")
        }
        else{
            res.status(403).json("you can delete only your post")
        }
    }
    catch(err){
        res.status(500).json(err)
    }
})


// like a post 

router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}})
            res.status(200).json("Post has been liked")
        }
        else{
            await post.updateOne({$pull: {likes: req.body.userId}})
            res.status(200).json("Post has been disliked")
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})

// get a post 

router.get("/:id", async(req,res) =>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json(err)
    }
})

// get timeline post 

router.get("/timeline/:userId", async(req,res) => {
    try{
        // console.log(req.body.userId);
        console.log("Post");
        const currentUser = await User.findById(req.params.userId)
        const userPosts = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => {
                return Post.find({userId: friendId})
            })
        )
        return res.status(200).json(userPosts.concat(...friendPosts))
    }
    catch(err){
        res.status(500).json(err)
    }
})


// get user's all post 

router.get("/profile/:username", async(req,res) => {
    try{
        const user = await User.findOne({username:req.params.username})
        // console.log(user);
        const posts = await Post.find({userId:user._id})
        return res.status(200).json(posts)
    }
    catch(err){
        
        return res.status(500).json(err)
    }
})

module.exports = router;