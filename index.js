const express = require('express');
const app = express();
const dataExtractor = require('./dataExtractor.js');



app.get('/kp/v1/getBorrow', async (req, res)=> {
    res.download('./data/borrow.json');
})

app.get('/kp/v1/getLend', async (req, res)=> {
    res.download('./data/.json');
})

app.listen(8090, async ()=>{
    setInterval(()=>{console.log('fsd')}, 5000)
});