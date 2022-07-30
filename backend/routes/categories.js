const { createCategory, getCategories } = require('../controllers/categories');

const router = require('express').Router();

router.get('/', createCategory);
router.post('/', getCategories);

module.exports= router