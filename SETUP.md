# 🚀 Clickdate React App - Setup Instructions

## Quick Start (3 steps)

### 1️⃣ Open Terminal
Open PowerShell in your workspace folder and run:
```powershell
cd "c:\Users\noaga\OneDrive\Desktop\GitProjects\Fun stuff\Clickdate"
```

### 2️⃣ Install Dependencies
```powershell
npm install
```
This will install React and all required dependencies (takes 2-3 minutes).

### 3️⃣ Start Development Server
```powershell
npm start
```
The app will automatically open in your browser at `http://localhost:3000`

---

## 📱 Mobile Testing

Once the app is running, you can:
- **Desktop:** View normally in browser
- **Mobile Emulation:** Press `F12` → Click device icon → Select device
- **Physical Device:** Use `http://<your-ip>:3000` (get IP from `ipconfig` in PowerShell)

---

## ⚙️ Configuration (Optional)

The app is already pre-configured with EmailJS credentials, but you can customize:

1. Update recipient email:
   - Open `src/components/Step3.js`
   - Change line: `to_email: 'milki2014@gmail.com'` to your email
   - Change line: `to_name: 'Miki'` to recipient name

2. If you want to use your own EmailJS account:
   - Sign up at https://www.emailjs.com/
   - Get your Public Key, Service ID, and Template ID
   - Update in `src/App.js` and `src/components/Step3.js`

---

## 📂 What's Inside?

```
✅ package.json          - Project dependencies
✅ public/index.html     - React template
✅ src/
   ✅ App.js              - Main component with state management
   ✅ components/Step1.js - Proposal screen
   ✅ components/Step2.js - Date & activity selection
   ✅ components/Step3.js - Review & send with EmailJS
   ✅ components/SuccessScreen.js - Celebration screen
✅ README.md             - Full documentation
```

---

## 🎯 Key Improvements Over HTML Version

✨ **Component-based architecture** - Cleaner, reusable code
📦 **React state management** - Easier to debug and modify
🔄 **Hot reload** - Changes refresh automatically
📱 **Better mobile UX** - Optimized touch interactions
🧪 **Easy to test** - Each component is isolated
🚀 **Production ready** - Build and deploy with one command

---

## 🛠️ Troubleshooting

**Command not found: npm**
- Install Node.js from https://nodejs.org/
- Restart PowerShell

**Port 3000 already in use**
```powershell
npm start -- --port 3001
```

**Dependencies installation failed**
```powershell
npm cache clean --force
npm install
```

---

## 🎉 Ready to Test!

Run `npm start` and enjoy your interactive date invitation app! 💝
