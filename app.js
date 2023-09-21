const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = require('./db/users');

app.get('/users', (req, res) => {
    res.json({
        data: users
    });
});
app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    res.json({
        data: users[+id - 1]
    });
});
app.post('/users', (req, res) => {
    if (req.body.name.length >= 3 && req.body.age > 0) {
        users.push(req.body);

        res.status(201).json({
            message: 'User created'
        });
    } else {
        res.status(403).json({
            message: 'Not valid data'
        });
    }


});
app.put('/users/:id', (req, res) => {
    const {id} = req.params;

    users[id] = req.body;
    res.json({
        message: 'User updated'
    });
});
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    users.splice(+id - 1, 1);

    res.status(204).json({
        message: 'No content'
    });
});


const PORT = 5001;

app.listen(PORT, () => {
    console.log(`Server has successfully started on PORT ${PORT}`);
});