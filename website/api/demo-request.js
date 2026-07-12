import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(str) {
  if (!str) return '—';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, role, institution, email, phone, size, challenge, source } = req.body || {};

  if (!name || !email || !institution || !role) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await resend.emails.send({
      from: 'Sapiion Demo <onboarding@resend.dev>',
      to: 'khalidsegh@hotmail.com',
      replyTo: email,
      subject: `Demo request — ${esc(name)} (${esc(institution)})`,
      html: `
        <h2 style="font-family:sans-serif;color:#0f172a">New demo request on Sapiion</h2>
        <table cellpadding="8" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Name</strong></td><td>${esc(name)}</td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Role</strong></td><td>${esc(role)}</td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Institution</strong></td><td>${esc(institution)}</td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Email</strong></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Phone</strong></td><td>${esc(phone)}</td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>Institution size</strong></td><td>${esc(size)}</td></tr>
          <tr><td style="color:#64748b;white-space:nowrap"><strong>How they found us</strong></td><td>${esc(source)}</td></tr>
          ${challenge ? `<tr><td style="color:#64748b;white-space:nowrap;vertical-align:top"><strong>Challenge</strong></td><td>${esc(challenge)}</td></tr>` : ''}
        </table>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
