const axios = require('axios');
const config = require('config');
const stringInject = require('stringinject').default
const fs = require('fs') 

const borrowBaseURL = config.get('baseGetBorrowURL');
const lendBaseURL = config.get('baseGetLendURL');
const borrowPageSize = config.get('borrowPageSize');
const lendPageSize = config.get('lendPageSize');


const fetchBorrowData = async () => {
    let pageNum = 1;
    let next;
    let dataArr = new Array();
    do {
        const res = await axios.get(stringInject(borrowBaseURL, [pageNum, borrowPageSize]));
        dataArr.push(...res.data.results);
        next = res.data.pagination.next;
        pageNum++;
        console.log(dataArr.length)
    } while (next !== null);
    fs.writeFileSync('./data/borrow.json', JSON.stringify(dataArr), { encoding: "utf-8" });
}

const fetchLendData = async () => {
    let pageNum = 1;
    let next;
    let dataArr = new Array();
    do {
        const res = await axios.get(stringInject(lendBaseURL, [pageNum, lendPageSize]));
        dataArr.push(...res.data.results);
        next = res.data.pagination.next;
        pageNum++;
        console.log(dataArr.length)
    } while (next !== null);
    fs.writeFileSync('./data/lend.json', JSON.stringify(dataArr), { encoding: "utf-8" });
}

module.exports.fetchBorrowData = fetchBorrowData;
module.exports.fetchLendData = fetchLendData;