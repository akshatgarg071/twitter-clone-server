import express from 'express'

import { createPost, getAllPost } from '../Controllers/Post.js'
import auth from '../Middlewares/auth.js'

const router = express.Router()

router.post('/create' , auth, createPost)
router.get('/get', getAllPost)

export default router

