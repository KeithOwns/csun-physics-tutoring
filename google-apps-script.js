/**
 * CSUN Physics Tutoring - Student Intake Webhook
 * 
 * Paste this script into Extensions > Apps Script in your Google Sheet.
 * Deploy as a Web App (Execute as: Me, Access: Anyone).
 */
function doPost(e) {
  try {
    // 1. Anti-spam check: ignore if honeypot field is filled
    if (e.parameter && e.parameter._gotcha) {
      return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
    }

    // 2. Parse form parameters
    var timestamp = new Date();
    var name = (e.parameter && e.parameter.name) ? e.parameter.name.trim() : "N/A";
    var campus = (e.parameter && e.parameter.campus) ? e.parameter.campus.trim() : "CSUN";
    var course = (e.parameter && e.parameter.course) ? e.parameter.course.trim() : "N/A";
    var format = (e.parameter && e.parameter.format) ? e.parameter.format.trim() : "Flexible";
    var phone = (e.parameter && e.parameter.phone) ? e.parameter.phone.trim() : "N/A";
    var email = (e.parameter && e.parameter.email) ? e.parameter.email.trim() : "N/A";
    var instructor = (e.parameter && e.parameter.instructor) ? e.parameter.instructor.trim() : "N/A";
    var focus = (e.parameter && e.parameter.focus) ? e.parameter.focus.trim() : "N/A";
    var notes = (e.parameter && e.parameter.notes) ? e.parameter.notes.trim() : "";

    // 3. Append row to active sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Create headers if new or empty sheet
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Student Name",
        "Campus",
        "Course",
        "Format",
        "Phone / Cell",
        "Email",
        "Instructor",
        "Help Needed",
        "Notes"
      ]);
      sheet.getRange("A1:J1")
        .setFontWeight("bold")
        .setBackground("#d11242")
        .setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      timestamp,
      name,
      campus,
      course,
      format,
      phone,
      email,
      instructor,
      focus,
      notes
    ]);

    // Auto-fit column widths
    for (var i = 1; i <= 10; i++) {
      sheet.autoResizeColumn(i);
    }

    // 4. Send Instant Email Notification
    var recipientEmail = Session.getActiveUser().getEmail() || "keith.tibbitts@gmail.com";
    var subject = "⚡ New Physics Tutoring Lead: " + name + " (" + campus + " - " + course + ")";
    var quickActions = "Quick Actions:\n";

    if (phone && phone !== "N/A") {
      body += "• Call: " + phone + "\n• Text: " + phone + "\n";
    }
    if (email && email !== "N/A") {
      quickActions += "• Email: " + email + "\n";
    }
    quickActions += "• View Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

    var body = 
      "You have a new student intake submission from JarHeadTutor.com!\n\n" +
      "----------------------------------------\n" +
      "Student Name:   " + name + "\n" +
      "Campus / Univ:  " + campus + "\n" +
      "Course:         " + course + "\n" +
      "Session Format: " + format + "\n" +
      "Phone / Cell:   " + phone + "\n" +
      "Email:          " + email + "\n" +
      "Instructor:     " + instructor + "\n" +
      "Help Needed:    " + focus + "\n" +
      "Notes:          " + (notes ? notes : "(None)") + "\n" +
      "----------------------------------------\n" +
      "Submitted:      " + timestamp.toLocaleString() + "\n\n" +
      quickActions;

    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: body
    });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
