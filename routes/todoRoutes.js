const express = require('express');
const { postTodo, getTodos, updateTodo, deleteTodo, getTodoById } = require('../controllers/todoControllers');


const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is my todo lit');
});

router.get('/todos', getTodos);

router.post('/todos', postTodo);

router.put('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

router.get('/todos/:id', getTodoById);


module.exports = {
    router
}