const { createCategory, getCategories } = require('../controllers/categories');

const router = require('express').Router();

router.post('/', createCategory);
router.get('/', getCategories);

module.exports= router