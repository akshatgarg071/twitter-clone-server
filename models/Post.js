import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    post__headerDescription : {type: String, required: "Post must have a description"},
    post__image : {type: String},
    userPosted: { type: String, required: "Post must have an author" },
    userId: { type: String },
    postedOn: { type: Date, default: Date.now },

})
mongoose.models = {}
export default mongoose.model("Post", postSchema)