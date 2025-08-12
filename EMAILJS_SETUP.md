# EmailJS Setup Guide

## How to Enable Real Email Sending

Currently, the contact form is in **demo mode**. To enable real email sending, follow these steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, Yahoo, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Portfolio Message from {{from_name}}

Hello Reeturaj,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save the template and note down the **Template ID**

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key**
3. Copy it for later use

### 5. Update the Code
In `app/components/sections/ContactSection.jsx`, find the `handleSubmit` function and:

1. Uncomment the production code block
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your actual Service ID
   - `YOUR_TEMPLATE_ID` with your actual Template ID  
   - `YOUR_PUBLIC_KEY` with your actual Public Key
3. Comment out or remove the demo simulation code

### 6. Test the Setup
1. Fill out the contact form on your website
2. Check your email inbox for the message
3. Verify the toast notification appears

## Demo Mode
Currently running in demo mode with:
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error toast notifications
- ✅ Form reset after submission
- ❌ Actual email sending (simulated)

## Production Mode Features
Once configured, you'll have:
- ✅ Real email delivery to reeturajvats587@gmail.com
- ✅ Professional email templates
- ✅ Delivery confirmations
- ✅ Error handling for failed sends

## Troubleshooting
- Make sure your email service is properly connected
- Check the EmailJS dashboard for delivery status
- Verify all IDs and keys are correct
- Test with a simple template first