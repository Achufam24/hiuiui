const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('home page');
})

app.listen(4000, () => {
    console.log('listening at port 4000');
})