const router = require('express').Router();
const {getUsers, updateUser, getUserById, deleteUser}= require('../controllers/users');


router.get('/', getUsers);
router.get('/:_id', getUserById);
router.put('/:id', updateUser);
router.delete('/:_id', deleteUser);

module.exports = router