const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_REGEX = /(.+)@(.+){2,}\.(.+){2,}/;

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, fromName, email, subject, message } = req.body;

  if (name) {
    return res.status(200).json({ success: true });
  }

  const errors = {};

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email && email.length > MAX_EMAIL_LENGTH) {
    errors.email = "Email is too long.";
  }
  if (message && message.length > MAX_MESSAGE_LENGTH) {
    errors.message = "Message is too long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipients = (process.env.EMAIL || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || recipients.length === 0) {
    console.error("Missing RESEND_API_KEY or EMAIL");
    return res
      .status(500)
      .json({ errors: { message: "Server config error." } });
  }

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const textBody = [
    subject ? `Subject: ${subject}` : "",
    `From: ${fromName || "Anonymous"} (${email})`,
    `Date: ${date}`,
    "",
    message,
    "",
    "—",
    "Zenith Build",
    "contact@zenithbuild.com",
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
<!DOCTYPE html>
<html>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; color: #1a1a1a;">
  <table style="max-width: 560px; margin: 0 auto; border-collapse: collapse;">
    <tr><td style="padding-bottom: 8px; font-size: 11px; color: #888; text-transform: uppercase; letter-spacing: 1px;">New inquiry</td></tr>
    <tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">From</td></tr>
    <tr><td style="padding-bottom: 16px; font-size: 16px; font-weight: 600;">${esc(fromName || "Anonymous")} &lt;${esc(email)}&gt;</td></tr>
    ${subject ? `<tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">Subject</td></tr><tr><td style="padding-bottom: 16px; font-size: 16px; font-weight: 600;">${esc(subject)}</td></tr>` : ""}
    <tr><td style="padding-bottom: 4px; font-size: 13px; color: #888;">Message</td></tr>
    <tr><td style="padding-bottom: 24px; font-size: 15px; line-height: 1.6; color: #333; white-space: pre-wrap;">${esc(message)}</td></tr>
    <tr><td style="padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999;">Zenith Build &mdash; contact@zenithbuild.com</td></tr>
  </table>
</body>
</html>`.trim();

  const res2 = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Zenith Build <onboarding@resend.dev>",
      to: recipients,
      reply_to: email,
      subject: `New inquiry from ${fromName || email}`,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!res2.ok) {
    const err = await res2.text();
    console.error("Resend error:", res2.status, err);
    return res
      .status(500)
      .json({ errors: { message: "Failed to send. Try again later." } });
  }

  return res.status(200).json({ success: true });
}
