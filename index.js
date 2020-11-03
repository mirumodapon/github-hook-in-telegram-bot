const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// initial middleware
app.use(express.json());

// use api
app.use('/bot', require('./router/api/mirumo_bot'));

// create server
const server = app.listen(
    PORT,
    () => {
        console.log(`Serve started on port ${PORT}`);
    }
);
