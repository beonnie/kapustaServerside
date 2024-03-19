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

app.listen(8090, async()=>{
    console.log(new Date());
    while(true){
        await dataUpdater.updateData();
        const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
        await pause(config.get('dataUpdateInterval'));
        console.log(new Date());
    }
});
