# Setting Up Your Zero-Cost Google Sheets & Email Intake Webhook

This setup connects your live CSUN Tutoring landing page directly to a Google Sheet in your Google Drive and triggers an immediate email notification whenever a student submits their information.

---

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.new) or open your Google Drive folder:
   `G:\My Drive\Tutoring`
2. Create a new Google Sheet named:
   **`CSUN Physics Tutoring - Student Leads`**

---

## Step 2: Add the Apps Script

1. In your new Google Sheet, click on **Extensions** in the top menu &gt; **Apps Script**.
2. Delete any existing code in the editor (`myFunction() { ... }`).
3. Open `google-apps-script.js` in this repository and copy all the code, or copy it from below:

```javascript
function doPost(e) {
  try {
    if (e.parameter && e.parameter._gotcha) {
      return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
    }

    var timestamp = new Date();
    var name = (e.parameter && e.parameter.name) ? e.parameter.name.trim() : "N/A";
    var phone = (e.parameter && e.parameter.phone) ? e.parameter.phone.trim() : "N/A";
    var email = (e.parameter && e.parameter.email) ? e.parameter.email.trim() : "N/A";
    var course = (e.parameter && e.parameter.course) ? e.parameter.course.trim() : "N/A";
    var instructor = (e.parameter && e.parameter.instructor) ? e.parameter.instructor.trim() : "N/A";
    var focus = (e.parameter && e.parameter.focus) ? e.parameter.focus.trim() : "N/A";
    var notes = (e.parameter && e.parameter.notes) ? e.parameter.notes.trim() : "";

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Student Name", "Phone / Cell", "Email", "Course", "Instructor", "Help Needed", "Notes"]);
      sheet.getRange("A1:H1").setFontWeight("bold").setBackground("#d11242").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([timestamp, name, phone, email, course, instructor, focus, notes]);

    for (var i = 1; i <= 8; i++) {
      sheet.autoResizeColumn(i);
    }

    var recipientEmail = Session.getActiveUser().getEmail() || "keith.tibbitts@gmail.com";
    var subject = "⚡ New CSUN Physics Tutoring Lead: " + name + " (" + course + ")";
    var body = 
      "You have a new student intake submission from your CSUN tutoring landing page!\n\n" +
      "----------------------------------------\n" +
      "Student Name: " + name + "\n" +
      "Phone / Cell: " + phone + "\n" +
      "Email:        " + email + "\n" +
      "Course:       " + course + "\n" +
      "Instructor:   " + instructor + "\n" +
      "Help Needed:  " + focus + "\n" +
      "Notes:        " + (notes ? notes : "(None)") + "\n" +
      "----------------------------------------\n" +
      "Submitted:    " + timestamp.toLocaleString() + "\n\n" +
      "Quick Actions:\n" +
      "• Call: " + phone + "\n" +
      "• Text: " + phone + "\n" +
      "• View Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();

    MailApp.sendEmail({ to: recipientEmail, subject: subject, body: body });

    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** icon (disk icon or `Ctrl+S`).

---

## Step 3: Deploy as a Web App

1. Click the blue **Deploy** button in the top right &gt; select **New deployment**.
2. Click the gear icon next to "Select type" &gt; choose **Web app**.
3. Fill in the deployment details:
   - **Description**: `CSUN Tutoring Intake Webhook`
   - **Execute as**: `Me (your Google email)`
   - **Who has access**: `Anyone` *(Critical: allows student submissions without requiring them to log into Google)*
4. Click **Deploy**.
5. When prompted, click **Authorize access**, choose your Google account, and grant standard Sheets/Mail permissions.
6. Copy the generated **Web app URL** (it looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

---

## Step 4: Connect to Your Landing Page

Open `index.html` and paste your Web App URL into the form action:

```html
<form id="tutoringIntakeForm" action="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec" method="POST">
```

Commit and push to GitHub (`git commit -am "chore: add Google Apps Script intake webhook URL" && git push`).

That's it! Every submission now:
- Appends automatically into your Google Sheet with formatting.
- Triggers an email alert to your private inbox.
- Never exposes your email to students or scrapers.
