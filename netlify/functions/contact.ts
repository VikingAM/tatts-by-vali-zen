import { Handler } from '@netlify/functions';

const RECIPIENT_EMAIL = 'jericho.santonia@silkenrose.com';

export const handler: Handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message, consent } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!name || !email || !message || !consent) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email address' }),
      };
    }

    // Create email content
    const emailContent = {
      to: RECIPIENT_EMAIL,
      from: email,
      subject: `🎨 Neue Kontaktanfrage von ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); color: #B47A4E; padding: 30px; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 300; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-left: 3px solid #B47A4E; border-radius: 4px; }
            .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px; }
            .message-box { background: white; padding: 20px; border-radius: 4px; border-left: 4px solid #B47A4E; white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Neue Tattoo-Anfrage</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Von</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">E-Mail</div>
                <div class="value">
                  <a href="mailto:${email}" style="color: #B47A4E; text-decoration: none;">${email}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">Nachricht / Idee</div>
                <div class="message-box">${message}</div>
              </div>
              
              <div class="field">
                <div class="label">Datenschutz</div>
                <div class="value">✅ Zugestimmt</div>
              </div>
            </div>
            <div class="footer">
              <p>Diese Nachricht wurde über das Kontaktformular auf tattsbyvali.ch gesendet.</p>
              <p>Empfangen am: ${new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Neue Tattoo-Anfrage von ${name}

Von: ${name}
E-Mail: ${email}

Nachricht:
${message}

Datenschutz: Zugestimmt
Empfangen am: ${new Date().toLocaleString('de-CH', { timeZone: 'Europe/Zurich' })}
      `.trim()
    };

    // Use Netlify's built-in email sending (requires Netlify Forms add-on)
    // OR we can use SendGrid, Resend, or other email service
    
    // For now, let's use a simple mailto approach or webhook
    // You'll need to configure this with an email service

    console.log('Contact form submission:', {
      name,
      email,
      message: message.substring(0, 100),
      timestamp: new Date().toISOString()
    });

    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    // For now, return success and the data will be logged
    
    // Option 1: Use Netlify Forms submission
    const formData = new URLSearchParams();
    formData.append('form-name', 'projekt-anfragen');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true,
        message: 'Nachricht erfolgreich gesendet!'
      }),
    };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

