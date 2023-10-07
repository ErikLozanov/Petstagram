const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('First Action');
});

app.listen(5000, console.log('Server is listening on port 5000...'));