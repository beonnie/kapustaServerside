const dataExtractor = require('./dataExtractor.js');
const config = require('config');
const excelFormatter = require('./excelFomatter.js')

const updateData = async () => {
        await dataExtractor.fetchBorrowData();
        console.log(1)
        excelFormatter.getBorrowExcel();
        console.log(2)
        await dataExtractor.fetchLendData();
        console.log(3)
        excelFormatter.getLendExcel();
        console.log(4)
        return true;
}

module.exports.updateData = updateData;