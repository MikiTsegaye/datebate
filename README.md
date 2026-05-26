# Clickdate - Interactive Date Invitation App 💝

A beautiful, mobile-responsive React app for sending personalized date invitations with a fun 3-step flow, confetti animations, and automated email notifications.

## 🚀 Quick Start

### Installation

1. Navigate to the project directory:
```bash
cd "Fun stuff\Clickdate"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 📱 Features

### Step 1: The Proposal
- Dynamic "No" button that escapes on hover
- "Yes" button with confetti animation
- Beautiful glassmorphism design

### Step 2: Date & Activity Selection
- Native HTML5 date picker
- 3 interactive activity cards:
  - **Movie** → Genre text input
  - **Eat Something** → 5 cuisine type buttons (Asian, Meat, Italian, Ethiopian, Sushi)
  - **Special Activity** → Custom wish text area
- Real-time form validation

### Step 3: Review & Send
- Clean summary of all selections
- EmailJS integration for automated email notifications
- Loading spinner during send
- Error handling with user-friendly messages

### Success Screen
- Beautiful celebration animation
- "Start Over" button for new invitations

## ⚙️ Configuration

### EmailJS Setup

1. Get your EmailJS credentials:
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Get your **Public Key** from Dashboard
   - Create an Email Service and get **Service ID**
   - Create an Email Template and get **Template ID**

2. Update credentials in `src/App.js` and `src/components/Step3.js`:
   - Replace `kcAk0wxoLwTEjz764` with your Public Key
   - Replace `service_jd01ur6` with your Service ID
   - Replace `template_3akb8g8` with your Template ID

3. Update recipient email in `src/components/Step3.js`:
   - Change `milki2014@gmail.com` to recipient email
   - Change `Miki` to recipient name

### Create EmailJS Template

Your email template should include these variables:
- `{{to_email}}`
- `{{to_name}}`
- `{{date_chosen}}`
- `{{main_activity}}`
- `{{specific_choice}}`
- `{{formatted_message}}`

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly buttons and inputs
- Smooth animations on all devices

## 🎨 Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Responsive styling
- **Animate.css** - Beautiful animations
- **EmailJS** - Email delivery service
- **React Scripts** - Build tooling

## 📁 Project Structure

```
src/
├── App.js                 # Main app logic and state management
├── index.js              # React entry point
├── index.css             # Global styles and animations
└── components/
    ├── Step1.js          # Proposal step
    ├── Step2.js          # Date & activity selection
    ├── Step3.js          # Review & send
    └── SuccessScreen.js  # Success confirmation

public/
└── index.html            # HTML template
```

## 🚢 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

## 🐛 Troubleshooting

**Email not sending?**
- Check your EmailJS credentials are correct
- Verify your email template is set up properly
- Ensure template variables match exactly

**Styles not loading?**
- Tailwind CSS is loaded via CDN
- Clear browser cache and reload

**Mobile layout issues?**
- Check viewport meta tag in `public/index.html`
- Test in Chrome DevTools device mode

## 📝 License

Created with ❤️ for special moments
