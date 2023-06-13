const express = require('express');
// const todoList = require('./data');

const { router } = require('./routes/todoRoutes');

const app = express();

app.use(express.json());
app.use('/', router);


app.use("*", (req, res) => {
    res.status(404).json(
        {
            success: false,
            message: "404 not found",
        }

    )
});
const port = 4500;
app.listen(port, () => { console.log(`Server is running on port ${port}`) });