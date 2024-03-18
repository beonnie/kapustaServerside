const axios = require('axios');
const config = require('config');
const stringInject = require('stringinject').default
const fs = require('fs') 

const baseURL = config.get('baseGetBorrowURL');
const pageSize = config.get('borrowPageSize');


const fetchBorrowData = async () => {
    let pageNum = 1;
    let next;
    let dataArr = new Array();
    do {
        const res = await axios.get(stringInject(baseURL, [pageNum, pageSize]));
        dataArr.push(...res.data.results);
        next = res.data.pagination.next;
        pageNum++;
        console.log(dataArr.length)
    } while (next !== null);
    fs.writeFileSync('./data/borrow.json', JSON.stringify(dataArr), { encoding: "utf-8" });
}

fetchBorrowData()


