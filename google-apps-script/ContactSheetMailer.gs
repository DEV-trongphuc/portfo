/**
 * TURNIO DEV — Google Apps Script Webhook + Auto Mailer
 * Target Google Sheet:
 * https://docs.google.com/spreadsheets/d/19OyCec7s0oD4M8U0KPPFxzu7Pmc6YlDPqSJH5RFTTxM/edit?gid=0#gid=0
 *
 * HƯỚNG DẪN KÍCH HOẠT (CHỈ 1 LẦN DUY NHẤT):
 * 1. Mở Google Sheet ở link trên -> Chọn Extensions (Tiện ích mở rộng) -> Apps Script.
 * 2. Xóa code mặc định, dán toàn bộ file này vào và bấm Save (Ctrl + S).
 * 3. Chọn hàm `testWebhookSetup` trên thanh công cụ -> Run -> cấp quyền Google Sheets & MailApp.
 * 4. Bấm Deploy (Triển khai) -> New deployment (Tùy chọn triển khai mới):
 *    - Type: Web app
 *    - Execute as: Me (Tôi)
 *    - Who has access: Anyone (Bất kỳ ai)
 * 5. Copy URL Web App (`https://script.google.com/macros/s/.../exec`)
 *    -> Dán vào Vercel Environment Variable: `APPS_SCRIPT_WEBHOOK_URL`
 */

var SPREADSHEET_ID = '19OyCec7s0oD4M8U0KPPFxzu7Pmc6YlDPqSJH5RFTTxM';
var TARGET_GID = 0;
var OWNER_EMAIL = 'turniodev@gmail.com';
var BRAND_NAME = 'TURNIO DEV — Huỳnh Trọng Phúc';
var SHEET_HEADERS = [
  'Thời Gian (VN)',
  'Họ & Tên',
  'Số Điện Thoại',
  'Email',
  'Đơn Vị / Công Ty',
  'Giải Pháp Quan Tâm',
  'Nội Dung Nhu Cầu',
  'Nguồn Trang',
  'Trạng Thái Email',
];

function getTargetSheet_() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheets = ss.getSheets();
  var targetSheet = sheets[0];
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getSheetId() === TARGET_GID) {
      targetSheet = sheets[i];
      break;
    }
  }

  if (targetSheet.getLastRow() === 0) {
    var headerRange = targetSheet.getRange(1, 1, 1, SHEET_HEADERS.length);
    headerRange.setValues([SHEET_HEADERS]);
    headerRange.setBackground('#0F172A');
    headerRange.setFontColor('#FFFFFF');
    headerRange.setFontWeight('bold');
    headerRange.setVerticalAlignment('middle');
    targetSheet.setFrozenRows(1);
    targetSheet.setRowHeight(1, 34);
  }
  return targetSheet;
}

function escapeHtml_(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function doGet() {
  return jsonResponse_({
    ok: true,
    service: 'TURNIO Contact Webhook',
    spreadsheetId: SPREADSHEET_ID,
    gid: TARGET_GID,
  });
}

function doPost(e) {
  try {
    var raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(raw);

    var name = String(payload.name || '').trim();
    var phone = String(payload.phone || '').trim();
    var email = String(payload.email || '').trim();
    var company = String(payload.company || '').trim();
    var service = String(payload.service || 'Tư vấn Hệ thống / AI / Martech').trim();
    var message = String(payload.message || '').trim();
    var pageUrl = String(payload.pageUrl || 'https://portfo-turnio.vercel.app/').trim();

    if (!name || !phone || !email) {
      return jsonResponse_({
        ok: false,
        error: 'Thiếu Họ tên, Số điện thoại hoặc Email.',
      });
    }

    var timestampVn = Utilities.formatDate(
      new Date(),
      'Asia/Ho_Chi_Minh',
      'dd/MM/yyyy HH:mm:ss'
    );

    var sheet = getTargetSheet_();
    var sheetRow = [
      timestampVn,
      name,
      "'" + phone,
      email,
      company || 'Chưa cung cấp',
      service,
      message || 'Yêu cầu liên hệ tư vấn trực tiếp',
      pageUrl,
      'Đang gửi...',
    ];
    sheet.appendRow(sheetRow);
    var rowNumber = sheet.getLastRow();

    var emailStatus = 'Skipped';
    var emailSentToClient = false;

    try {
      // 1) Email thông báo Lead mới tới TURNIO
      var ownerSubject =
        '[TURNIO PORTFO] Lead mới từ ' + name + ' (' + (company || phone) + ')';
      var ownerHtml =
        '<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#ffffff;">' +
        '<div style="background:linear-gradient(135deg,#0F172A,#1E40FF);color:#ffffff;padding:20px 24px;">' +
        '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#7DD3FC;font-weight:bold;">TURNIO DEV • PORTFOLIO LEAD ALERT</div>' +
        '<h2 style="margin:6px 0 0;font-size:20px;">Yêu Cầu Tư Vấn Hệ Thống Mới</h2>' +
        '</div>' +
        '<div style="padding:24px;color:#0F172A;font-size:14px;line-height:1.6;">' +
        '<table style="width:100%;border-collapse:collapse;">' +
        '<tr><td style="padding:8px 0;color:#64748B;width:150px;">Họ & Tên:</td><td style="padding:8px 0;font-weight:bold;">' + escapeHtml_(name) + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:#64748B;">Số Điện Thoại:</td><td style="padding:8px 0;font-weight:bold;color:#1E40FF;">' + escapeHtml_(phone) + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:#64748B;">Email:</td><td style="padding:8px 0;font-weight:bold;">' + escapeHtml_(email) + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:#64748B;">Đơn Vị / Công Ty:</td><td style="padding:8px 0;font-weight:bold;">' + escapeHtml_(company || 'Chưa cung cấp') + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:#64748B;">Giải Pháp:</td><td style="padding:8px 0;">' + escapeHtml_(service) + '</td></tr>' +
        '<tr><td style="padding:8px 0;color:#64748B;">Thời Gian:</td><td style="padding:8px 0;">' + escapeHtml_(timestampVn) + '</td></tr>' +
        '</table>' +
        '<div style="margin-top:16px;padding:14px 16px;background:#F8FAFC;border-left:4px solid #1E40FF;border-radius:8px;">' +
        '<div style="font-size:12px;color:#64748B;font-weight:bold;margin-bottom:4px;">Nội dung trao đổi:</div>' +
        '<div>' + escapeHtml_(message || 'Khách yêu cầu kết nối tư vấn trực tiếp.') + '</div>' +
        '</div>' +
        '<div style="margin-top:20px;">' +
        '<a href="https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/edit?gid=' + TARGET_GID + '#gid=' + TARGET_GID + '" style="display:inline-block;padding:10px 18px;background:#1E40FF;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:bold;font-size:13px;">Mở Google Sheet CRM</a>' +
        '</div></div></div>';

      MailApp.sendEmail({
        to: OWNER_EMAIL,
        subject: ownerSubject,
        replyTo: email,
        htmlBody: ownerHtml,
      });

      // 2) Email cảm ơn tự động gửi cho Khách hàng
      var clientSubject =
        'Cảm ơn ' + name + ' đã liên hệ với Huỳnh Trọng Phúc (TURNIO DEV)';
      var clientHtml =
        '<div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #E2E8F0;border-radius:16px;overflow:hidden;background:#ffffff;">' +
        '<div style="background:linear-gradient(135deg,#0B1120,#1E40FF,#0EA5E9);color:#ffffff;padding:24px;">' +
        '<div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#BAE6FD;font-weight:bold;">TURNIO DEV • MARTECH, FULLSTACK & AI AUTOMATION</div>' +
        '<h2 style="margin:8px 0 0;font-size:21px;">Cảm Ơn Anh/Chị ' + escapeHtml_(name) + ' Đã Kết Nối!</h2>' +
        '</div>' +
        '<div style="padding:24px;color:#334155;font-size:14px;line-height:1.7;">' +
        '<p>Chào anh/chị <strong>' + escapeHtml_(name) + '</strong>,</p>' +
        '<p>Hệ thống của <strong>Huỳnh Trọng Phúc (TURNIO DEV)</strong> đã tiếp nhận đầy đủ thông tin yêu cầu tư vấn từ đơn vị <strong>' + escapeHtml_(company || 'Quý Doanh Nghiệp') + '</strong>.</p>' +
        '<div style="background:#F0F7FF;border:1px solid #BFDBFE;border-radius:12px;padding:16px;margin:16px 0;">' +
        '<div style="font-size:12px;font-weight:bold;color:#1E40FF;text-transform:uppercase;margin-bottom:8px;">Tóm Tắt Yêu Cầu Đã Ghi Nhận</div>' +
        '<div>• <strong>Số điện thoại:</strong> ' + escapeHtml_(phone) + '</div>' +
        '<div>• <strong>Đơn vị / Công ty:</strong> ' + escapeHtml_(company || 'Chưa cung cấp') + '</div>' +
        '<div>• <strong>Chủ đề quan tâm:</strong> ' + escapeHtml_(service) + '</div>' +
        '<div>• <strong>Thời gian:</strong> ' + escapeHtml_(timestampVn) + '</div>' +
        '</div>' +
        '<p>Phúc sẽ rà soát bài toán vận hành của anh/chị và phản hồi trực tiếp qua SĐT/Zalo hoặc Email trong thời gian sớm nhất.</p>' +
        '<p style="margin-top:20px;">' +
        '<a href="https://zalo.me/0378859736" style="display:inline-block;padding:11px 20px;background:#1E40FF;color:#ffffff;text-decoration:none;border-radius:999px;font-weight:bold;font-size:13px;">Kết Nối Zalo Trực Tiếp: 0378.859.736</a>' +
        '</p>' +
        '<p style="margin-top:22px;font-size:12px;color:#64748B;">Trân trọng,<br/><strong>Huỳnh Trọng Phúc (TURNIO)</strong> — Founder DOMATION & Architect INKICA AI<br/>Website: https://portfo-turnio.vercel.app/</p>' +
        '</div></div>';

      MailApp.sendEmail({
        to: email,
        subject: clientSubject,
        replyTo: OWNER_EMAIL,
        htmlBody: clientHtml,
      });

      emailStatus = 'Đã gửi Email Owner + Khách (' + timestampVn + ')';
      emailSentToClient = true;
    } catch (mailErr) {
      emailStatus = 'Sheet OK • Lỗi Email: ' + String(mailErr);
    }

    sheet.getRange(rowNumber, SHEET_HEADERS.length).setValue(emailStatus);

    return jsonResponse_({
      ok: true,
      rowNumber: rowNumber,
      emailSent: emailSentToClient,
      emailStatus: emailStatus,
      timestamp: timestampVn,
    });
  } catch (err) {
    return jsonResponse_({
      ok: false,
      error: String(err),
    });
  }
}

function testWebhookSetup() {
  var sheet = getTargetSheet_();
  Logger.log('Connected Sheet: ' + sheet.getName() + ' (GID: ' + sheet.getSheetId() + ')');
  Logger.log('Remaining daily email quota: ' + MailApp.getRemainingDailyQuota());
}
