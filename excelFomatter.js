const xl = require('excel4node');
const config = require('config');
const fs = require('fs') 

const wb = new xl.Workbook();
const ws = wb.addWorksheet();

const columns = config.get('columns');
const columnsView = config.get('columnsView');
const excelBorrowName = config.get('excelBorrowName');
const excelLendName = config.get('excelLendName');

const getBorrowExcel = () => {
    const dataArr = JSON.parse(fs.readFileSync('./data/borrow.json', { encoding: "utf-8" }));
    columnsView.forEach((e, i) => {
        ws.cell(1, i + 1).string(e);
    });
    dataArr.forEach((e1, i1) => {
        columns.forEach((e, i) => {
            if(i === 1) {
                ws.cell(i1 + 2, i + 1).string((Number(e1[e]) + Number(e1[columns[5]])).toString());
            } else
            ws.cell(i1 + 2, i + 1).string((e1[e]).toString());
        })
    })
    wb.write(excelBorrowName);
}

const getLendExcel = () => {
    const dataArr = JSON.parse(fs.readFileSync('./data/lend.json', { encoding: "utf-8" }));
    columnsView.forEach((e, i) => {
        ws.cell(1, i + 1).string(e);
    });
    dataArr.forEach((e1, i1) => {
        columns.forEach((e, i) => {
            if(i === 1) {
                ws.cell(i1 + 2, i + 1).string((Number(e1[e]) + Number(e1[columns[5]])).toString());
            } else
            ws.cell(i1 + 2, i + 1).string((e1[e]).toString());
        })
    })
    wb.write(excelLendName);
}

getLendExcel();





