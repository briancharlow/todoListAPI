const todoList = require('../data');


module.exports = {
    postTodo: (req, res) => {
        todoList.push(req.body);
        console.log(todoList)
        res.status(201).json({
            success: true,
            message: "added the todo successfully",
            results: todoList
        });
    },
    getTodos: (req, res) => {

        res.json({
            success: true,
            message: "todos retrieved successfully",
            results: todoList
        });
    },

    updateTodo: (req, res) => {
        const { id } = req.params;
        const taskIndex = todoList.findIndex(todo => todo.id.toString() === id);
        if (taskIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "todo  found",
            })
        }

        const { task, priority, deadline } = req.body


        if (task) {
            todoList[taskIndex].task = task;
        }
        if (priority) {
            todoList[taskIndex].priority = priority;
        }
        if (deadline) {
            todoList[taskIndex].deadline = deadline;
        }
        res.json({
            success: true,
            message: "todo updated successfully",
            results: todoList
        });

    },

    deleteTodo: (req, res) => {
        const { id } = req.params;
        const todoIndex = todoList.findIndex(todo => todo.id.toString() === id);

        if (todoIndex === -1) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }

        todoList.splice(todoIndex, 1);
        res.json({
            success: true,
            message: "todo deleted successfully",
            results: todoList
        });
    },

    getTodoById: (req, res) => {
        const { id } = req.params;
        const todoId = todoList.findIndex(todo => todo.id.toString() === id);

        if (todoId === -1) {
            return res.status(404).json({
                success: false,
                message: "todo not found",

            })
        }


        res.json({
            success: true,
            message: "todo retrieved successfully",
            results: todoList[todoId]
        });


    }

};

