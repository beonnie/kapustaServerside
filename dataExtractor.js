const axios = require('axios');
const jsdom = require('jsdom');
const config = require('config');

const borrowURL = config.get('baseGetBorrowURL');
const pageSize = config.get('pageSize');
const str = stringInject(borrowURL, 12);
console.log(borrowURL)