function doPost(e) {
  try {
    var p = e.parameter || {};
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = p.sheet || 'Canta Math';
    var sh = ss.getSheetByName(sheetName);

    if (!sh) sh = ss.insertSheet(sheetName);

    if (sh.getLastRow() === 0) {
      sh.appendRow([
        'Received At','Student','Year','Grade','Mode','Actual Time',
        'Total Runs','Run Seconds','Run Time Added','Final Score Time',
        'Wrong Attempts','Run Mode - Wrong on First Attempt'
      ]);
      sh.setFrozenRows(1);
    }

    sh.appendRow([
      new Date(),
      p.student || '',
      p.year || '',
      p.grade || '',
      p.mode || '',
      p.actualTime || '',
      Number(p.totalRuns || 0),
      Number(p.runSeconds || 0),
      p.runTimeAdded || '',
      p.finalScoreTime || '',
      Number(p.wrongAttempts || 0),
      p.firstWrongQuestions || ''
    ]);

    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('DYAA Canta Math receiver is running.')
    .setMimeType(ContentService.MimeType.TEXT);
}
