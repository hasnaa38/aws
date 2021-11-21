'use strict';

// to deploy on aws, this file should be server not index, but try them 

const express = require('express');
const app = new express();

const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

// read the files from the public folder:
// static means its a static page, no interactions happening. Used to upload static pages on our express server
app.use(express.static('./public'));

app.get('/', (req, res)=>{
    res.status(200).send('try reaching /info.html here');
});

app.get('/news', (req, res)=>{
    res.status(200).send('just installed emojies 👾');
});
