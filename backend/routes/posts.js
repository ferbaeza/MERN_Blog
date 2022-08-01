const { getAllPost, createPost, updatePost, deletePost, getPostById } = require('../controllers/posts');

const router = require('express').Router();


router.get('/', getAllPost);
router.get('/:_id', getPostById);
router.post('/', createPost);
router.put('/:_id', updatePost);
router.delete('/:_id', deletePost);


module.exports= router