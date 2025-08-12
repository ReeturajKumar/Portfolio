# 🚀 URGENT: Set Up Real Email Sending - Step by Step Guide

## The Issue
Your contact form is not sending real emails because EmailJS needs to be configured with your account credentials.

## ⚡ Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"**
3. Use your Gmail: **reeturajvats587@gmail.com**
4. Verify your email

### Step 2: Connect Your Gmail
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **reeturajvats587@gmail.com**
6. Allow permissions
7. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

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

4. **Save and copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `user_abcXYZ123`)

### Step 5: Update Your Code
In the file: `app/components/sections/ContactSection.jsx`

**Find line 116:**
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');
```
**Replace with:**
```javascript
emailjs.init('your_actual_public_key_here');
```

**Find line 155:**
```javascript
const serviceId = 'YOUR_SERVICE_ID';
```
**Replace with:**
```javascript
const serviceId = 'your_actual_service_id_here';
```

**Find line 156:**
```javascript
const templateId = 'YOUR_TEMPLATE_ID';
```
**Replace with:**
```javascript
const templateId = 'your_actual_template_id_here';
```

### Step 6: Test It
1. Save the file
2. Go to http://localhost:3002
3. Fill out the contact form
4. Submit it
5. **Check your Gmail inbox!** 📧

## 🎯 What You Need to Replace

```javascript
// BEFORE (in your code now):
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); 
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';

// AFTER (with your actual values):
emailjs.init('user_1a2b3c4d5e6f7g8h'); // Your real public key
const serviceId = 'service_9h8j7k6l'; // Your real service ID
const templateId = 'template_contact_form'; // Your real template ID
```

## 🔧 Alternative: Use Environment Variables (Recommended)

1. Create file: `.env.local` (in root directory)
2. Add:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here  
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Update the code to use:
```javascript
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
```

## ✅ When It's Working
- Form submits successfully
- Green toast appears: "Message sent successfully!"
- Email appears in **reeturajvats587@gmail.com** inbox
- No errors in browser console

## 🚨 Common Issues & Fixes

**Issue: "401 Unauthorized"**
- Fix: Check your public key is correct

**Issue: "400 Bad Request"**  
- Fix: Check service ID and template ID

**Issue: "Template not found"**
- Fix: Make sure template variables match: {{from_name}}, {{from_email}}, {{message}}

**Issue: No email received**
- Check Gmail spam folder
- Verify service is connected to correct Gmail account

## 🎉 Once Complete
Your contact form will:
- Send real emails to reeturajvats587@gmail.com
- Show professional success/error toasts
- Include sender's name, email, and message
- Allow you to reply directly to visitors

**Need Help?** The setup takes 5 minutes max. Each step is clearly documented on EmailJS.com.