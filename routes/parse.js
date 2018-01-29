var Excel = require('exceljs');

// read from a file
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('../public/excel/format fisiser concedii.xlsx')
    .then(function() {
        // use workbook
        // var worksheet = workbook.getWorksheet('CO nou');
        var worksheet = workbook.getWorksheet(1);
        var row = worksheet.getRow(51);
        console.log(row.values);
    });