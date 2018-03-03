var firebase = require('firebase');
var Excel = require('exceljs');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCW6rH9OtlQgqqJOmRebSll1uEJL1fQIAs",
    authDomain: "concedii-b16df.firebaseapp.com",
    databaseURL: "https://concedii-b16df.firebaseio.com",
    projectId: "concedii-b16df",
    storageBucket: "concedii-b16df.appspot.com",
    messagingSenderId: "987388293685"
  };

firebase.initializeApp(config);
let db = firebase.database();

// read from a file
var workbook = new Excel.Workbook();
var path = require('path');
var root = path.dirname(require.main.filename);

workbook.xlsx.readFile(root + '/public/excel/format_fisiser_concedii.xlsx')
    .then(function() {
        // use workbook
        // var worksheet = workbook.getWorksheet('CO nou');
        var worksheet = workbook.getWorksheet(1);
        console.log(worksheet.rowCount);
        for(i=14; i<=worksheet.rowCount; i++) {
            var row = worksheet.getRow(i);
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
                jobDescription: row.getCell(32).value
            });
        }
    })
    .catch(function() {
        console.log("error when reading the file")
    });

// var ref = db.ref("employees/");
var count = 0;

var testDb = function() {
    var names = '';
    ref.on('value',function(snap) {
        snap.forEach(function(child) {
            console.log(child.val().name);
            if(child.val().name != undefined){
              names += child.val().name;
            }
          });
    });

    return names;
}

exports.testingData = function testing(req, res, next) {
    let ref = db.ref('employees');
    var test = [];
    var emp = {};
    ref.on("value", function(snapshot) {
        console.log((Object.values(snapshot.val())[0].name).trim());
        emp = {
            name: (Object.values(snapshot.val())[0].name).trim(),
            employeeNumber: (Object.values(snapshot.val())[0].employeeNumber).trim()
        }
        test.push(emp);
        console.log('test', test);
      });
    res.json(test);
  }

// export default testDb;
