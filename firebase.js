let firebase = require('firebase');
let Excel = require('exceljs');

// Initialize Firebase
let config = {
    apiKey: 'AIzaSyCW6rH9OtlQgqqJOmRebSll1uEJL1fQIAs',
    authDomain: 'concedii-b16df.firebaseapp.com',
    databaseURL: 'https://concedii-b16df.firebaseio.com',
    projectId: 'concedii-b16df',
    storageBucket: 'concedii-b16df.appspot.com',
    messagingSenderId: '987388293685',
  };

firebase.initializeApp(config);
let db = firebase.database();

// read from a file
let workbook = new Excel.Workbook();
let path = require('path');
let root = path.dirname(require.main.filename);
root = root + './format_fisiser_concedii.xlsx';

workbook.xlsx.readFile(root)
    .then(function() {
        // use workbook
        // var worksheet = workbook.getWorksheet('CO nou');
        let worksheet = workbook.getWorksheet(1);
        // console.log(worksheet.rowCount);
        for (i=14; i<=worksheet.rowCount; i++) {
            let row = worksheet.getRow(i);
            db.ref('employees/' + row.getCell(3).value).set({
                no: row.getCell(1).value,
                employeeNumber: row.getCell(2).value,
                name: row.getCell(3).value,
                position: row.getCell(6).value,
                employmentDate: row.getCell(8).value,
                atHaufefor: row.getCell(9).value,
                daysPreviousYear: row.getCell(11).value,
                daysCurrentYear: row.getCell(13).value,
                zileCoEven: row.getCell(12).value,
                january: row.getCell(14).value,
                february: row.getCell(15).value,
                march: row.getCell(16).value,
                april: row.getCell(17).value,
                may: row.getCell(18).value,
                june: row.getCell(19).value,
                july: row.getCell(20).value,
                august: row.getCell(23).value,
                september: row.getCell(24).value,
                october: row.getCell(25).value,
                november: row.getCell(26).value,
                december: row.getCell(28).value,
                totalDaysTaken: row.getCell(29).value,
                totalDaysRemaining: row.getCell(30).value,
                jobDescription: row.getCell(32).value,
            });
        }
    })
    .catch(function() {
        console.log('error when reading the file');
    });


exports.testingData = function testing(req, res, next) {
    let ref = db.ref(`employees`);
    let test = [];
    let emp = {};
    let values;
    ref.on('value', function(snapshot) {
        values = Object.values(snapshot.val())[37];
        console.log(values.january);
        emp = {
            name: (values.name).trim(),
            employeeNumber: (values.employeeNumber).trim(),
            employmentDate: values.employmentDate,
            daysPreviousYear: values.daysPreviousYear,
            daysCurrentYear: values.daysCurrentYear,
            totalDaysRemaining: values.totalDaysRemaining,
            january: values.january,
            february: (values.february),
            march: (values.march),
            april: (values.april),
            may: (values.may),
            june: (values.june),
            july: (values.july),
            august: (values.august),
            september: (values.september),
            october: (values.october),
            november: (values.november),
            december: (values.december),
        };
        test.push(emp);
        console.log('test', test);
        res.json(test);
      });
  };

// export default testDb;
