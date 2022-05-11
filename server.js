const express = require('express');

// const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const connect = require('./db/connect');

// app.use(cors());
app.use(express.json());
app.use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// });

//Change
connect.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(process.env.PORT || 8080);
        console.log(`Connected to DB and listening on ${port}`);
    }
});
