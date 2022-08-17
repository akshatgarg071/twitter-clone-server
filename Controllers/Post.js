import Post from '../models/Post.js'


export const createPost = async(req, res) => {
    const postPostData = req.body;
    const userId = req.userId;
    const postPost = new Post({ ...postPostData, userId});
    try {
        await postPost.save();
        res.status(200).json("Created a Post successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post due to error")        
    }
}
export const getAllPost = async (req, res) => {
    try {
        const postList = await Post.find();
        res.status(200).json(postList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 