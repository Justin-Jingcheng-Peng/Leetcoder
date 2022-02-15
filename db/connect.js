const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://JustinP:Pjc031209!@newproject.jbhzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
    .connect(connectionString, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
    .then(() => console.log('Connected to the DB'))
    .catch((err) => console.log(err))