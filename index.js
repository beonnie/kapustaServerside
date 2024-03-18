const express = require('express');
const app = express();
const dataUpdater = require('./dataUpdater.js');
const stringInject = require('stringinject').default;
const config = require('config');

app.get('/kp/v1/getBorrow', (req, res)=> {
    res.download(stringInject(config.get('excelPath'), [config.get('excelBorrowName')]));
})

app.get('/kp/v1/getLend', (req, res)=> {
    res.download(stringInject(config.get('excelPath'), [config.get('excelLendName')]));
})

app.listen(8090, ()=>{

});
