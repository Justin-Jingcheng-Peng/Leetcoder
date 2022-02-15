require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

// mid ware

app.use(express.json());

// route 
app.get('/hello', (req, res) => {
    res.send('Task manager App');
})

app.use('/api/v1/tasks', tasks);
const port = 3000;

app.listen(port, console.log(`server is listening on the port ${port}`));
