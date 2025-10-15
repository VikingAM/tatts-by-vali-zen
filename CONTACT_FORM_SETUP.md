# Contact Form Setup Guide

## ✅ What's Been Implemented

The contact form is now configured to work with **Netlify Forms**, which will:
1. Capture all form submissions
2. Store them in your Netlify dashboard
3. Send email notifications to the configured address

## 📧 Email Configuration (REQUIRED)

After deploying, you MUST configure email notifications in Netlify:

### Step 1: Deploy Your Site
```bash
git add .
git commit -m "feat: setup working contact form with Netlify Forms"
git push origin master
```

### Step 2: Configure Email Notifications in Netlify Dashboard

1. **Go to your Netlify Dashboard**
   - Navigate to: https://app.netlify.com

2. **Select your site** (tattsbyvali)

3. **Go to Forms**
   - Click on "Forms" in the left sidebar
   - You should see "projekt-anfragen" form listed

4. **Configure Form Notifications**
   - Click on the form name "projekt-anfragen"
   - Click "Settings and emails" or "Form notifications"
   - Click "Add notification"
   - Select "Email notification"
   - Enter: **jericho.santonia@silkenrose.com**
   - Save

5. **Optional: Set up Slack/Webhook notifications**
   - You can also add Slack notifications if needed
   - Or webhook notifications to integrate with other services

### Step 3: Test the Form

1. Visit your live site
2. Fill out the contact form
3. Submit it
4. Check:
   - ✅ Form submission appears in Netlify dashboard (Forms tab)
   - ✅ Email notification arrives at jericho.santonia@silkenrose.com

## 📋 Form Details

**Form Name:** `projekt-anfragen`

**Fields:**
- `name` - Customer's name
- `email` - Customer's email address
- `message` - Their tattoo idea/request
- `privacy` - Privacy consent checkbox
- `honeypot` - Bot protection field (hidden)

## 🔒 Security Features

1. **Honeypot field** - Catches spam bots
2. **Client-side validation** - Zod schema validation
3. **Email validation** - Proper email format checking
4. **Privacy consent** - Required GDPR compliance
5. **Rate limiting** - Netlify automatically rate limits submissions

## 📊 Viewing Submissions

All form submissions are stored in Netlify:
1. Go to your Netlify dashboard
2. Click "Forms" in the sidebar
3. Click on "projekt-anfragen"
4. View all submissions with timestamps
5. Export to CSV if needed

## 🎨 Email Template

Submissions will be sent in a nicely formatted HTML email with:
- Customer name
- Email address (clickable mailto link)
- Their message/tattoo idea
- Privacy consent confirmation
- Timestamp

## 🚨 Troubleshooting

### Form not appearing in Netlify dashboard?
- Make sure `public/forms.html` is deployed
- Rebuild your site in Netlify
- Check that form has `data-netlify="true"` attribute

### Not receiving emails?
- Check Netlify Forms → Settings → Notifications
- Verify email address is correct: jericho.santonia@silkenrose.com
- Check spam folder
- Verify email isn't blocked by firewall

### Form submission fails?
- Check browser console for errors
- Verify internet connection
- Test on different browser
- Check Netlify function logs

## 💡 Alternative: Use Netlify Function + Email Service

If you want more control over email formatting or want to use a custom email service:

1. Install an email service SDK (SendGrid, Resend, Mailgun):
```bash
npm install @sendgrid/mail
# or
npm install resend
```

2. Add environment variable in Netlify:
   - Go to Site settings → Environment variables
   - Add `SENDGRID_API_KEY` or `RESEND_API_KEY`
   - Get API key from your email service

3. Update `netlify/functions/contact.ts` to use the email service

4. Change form to POST to `/.netlify/functions/contact`

## 📱 Features

- ✅ Form validation (client-side with Zod)
- ✅ Spam protection (honeypot field)
- ✅ Error handling and user feedback
- ✅ Success message after submission
- ✅ Toast notifications
- ✅ Loading states
- ✅ Accessible (ARIA labels, error messages)
- ✅ Mobile responsive
- ✅ GDPR compliant (privacy consent)

## 🎯 Next Steps

1. Deploy the changes
2. Configure email notification in Netlify dashboard
3. Test the form
4. Monitor submissions
5. Celebrate! 🎉

