// Netlify Function: auto-triggered on every form submission.
// Sends a branded email via Resend API.
// Env vars (set in Netlify dashboard):
//   RESEND_API_KEY  - your Resend API key (re_...)
//   TO_EMAIL        - destination inbox (e.g. badbyte26@gmail.com)
//   FROM_EMAIL      - sender (default: onboarding@resend.dev for testing)

const BUDGET_LABELS = {
  "under-1k": "Do 1.000€",
  "1k-5k": "1.000€ - 5.000€",
  "5k-10k": "5.000€ - 10.000€",
  "10k-plus": "10.000€+",
  "not-sure": "Nisam siguran/a",
};

const escapeHtml = (str = "") =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildHtml = ({ name, email, budget, message }) => {
  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    budget: budget ? escapeHtml(BUDGET_LABELS[budget] || budget) : "—",
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  return `<!DOCTYPE html>
<html lang="sr">
  <head>
    <meta charset="UTF-8" />
    <title>Nova poruka sa sajta</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e5e5e5;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;padding:40px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111111;border:1px solid #1f2937;border-radius:16px;overflow:hidden;">
            <!-- Header -->
            <tr>
              <td style="padding:32px 32px 16px 32px;border-bottom:1px solid #1f2937;">
                <div style="font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#10b981;font-family:'JetBrains Mono',monospace;">
                  Bad Byte
                </div>
                <h1 style="margin:8px 0 0 0;font-size:24px;font-weight:700;color:#ffffff;line-height:1.3;">
                  📨 Nova poruka sa sajta
                </h1>
              </td>
            </tr>

            <!-- Sender info card -->
            <tr>
              <td style="padding:24px 32px 0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.3);border-radius:12px;">
                  <tr>
                    <td style="padding:20px;">
                      <div style="font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:6px;font-family:'JetBrains Mono',monospace;">Ime</div>
                      <div style="font-size:18px;font-weight:600;color:#ffffff;margin-bottom:16px;">${safe.name}</div>

                      <div style="font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:6px;font-family:'JetBrains Mono',monospace;">Email</div>
                      <div style="font-size:16px;font-weight:500;margin-bottom:16px;">
                        <a href="mailto:${safe.email}" style="color:#10b981;text-decoration:none;">${safe.email}</a>
                      </div>

                      <div style="font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:6px;font-family:'JetBrains Mono',monospace;">Budžet</div>
                      <div style="font-size:16px;font-weight:500;color:#ffffff;">${safe.budget}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:24px 32px 8px 32px;">
                <div style="font-size:12px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#9ca3af;margin-bottom:10px;font-family:'JetBrains Mono',monospace;">Poruka</div>
                <div style="font-size:15px;line-height:1.6;color:#e5e5e5;background-color:#0a0a0a;border:1px solid #1f2937;border-radius:12px;padding:18px;">
                  ${safe.message}
                </div>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding:16px 32px 32px 32px;">
                <a href="mailto:${safe.email}?subject=Re:%20Va%C5%A1%20upit%20\u2014%20Bad%20Byte"
                   style="display:inline-block;background-color:#10b981;color:#0a0a0a;font-weight:600;font-size:15px;padding:12px 24px;border-radius:10px;text-decoration:none;">
                  Odgovori direktno
                </a>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 32px;border-top:1px solid #1f2937;background-color:#0a0a0a;">
                <div style="font-size:13px;color:#6b7280;line-height:1.5;">
                  <strong style="color:#9ca3af;">Bad Byte</strong> &nbsp;•&nbsp; Web Development Studio &nbsp;•&nbsp; Novi Sad
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
};

const buildText = ({ name, email, budget, message }) => {
  const budgetLabel = budget ? BUDGET_LABELS[budget] || budget : "—";
  return [
    "Nova poruka sa sajta — Bad Byte",
    "",
    `Ime:    ${name}`,
    `Email:  ${email}`,
    `Budžet: ${budgetLabel}`,
    "",
    "Poruka:",
    message,
    "",
    "—",
    "Bad Byte • Novi Sad",
  ].join("\n");
};

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");
    const data = body?.payload?.data || {};
    const { name = "", email = "", budget = "", message = "" } = data;

    if (!name || !email || !message) {
      console.warn("submission-created: missing required fields", { name, email });
      return { statusCode: 200, body: "Skipped: missing fields" };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.TO_EMAIL || "badbyte26@gmail.com";
    const fromEmail = process.env.FROM_EMAIL || "Bad Byte <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("submission-created: RESEND_API_KEY is not set");
      return { statusCode: 500, body: "Missing RESEND_API_KEY" };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Nova poruka: ${name}`,
        html: buildHtml({ name, email, budget, message }),
        text: buildText({ name, email, budget, message }),
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Resend error:", response.status, errText);
      return { statusCode: 500, body: `Resend error: ${response.status}` };
    }

    return { statusCode: 200, body: "Email sent" };
  } catch (err) {
    console.error("submission-created: unexpected error", err);
    return { statusCode: 500, body: "Internal error" };
  }
};
