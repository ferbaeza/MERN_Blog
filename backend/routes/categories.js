const { createCategory, getCategories, getCategoryById } = require('../controllers/categories');

const router = require('express').Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/:_id', getCategoryById);

module.exports= router