const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const connect = require('./db/connect');

app.use(cors());
app.use('/', require('./routes'));


// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// });

connect.initDb((err, connect) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(8080);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
