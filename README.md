# 📔 Daily Code Journal

A beautiful, feature-rich coding journal to track your daily progress and maintain your GitHub streak!

## ✨ Features

- 📝 **Daily Entries** - Log what you worked on, learned, challenges faced, and goals
- 🔥 **Streak Tracking** - Track current and historical streaks
- ⭐ **Task Completion** - Mark daily tasks as completed/incomplete
- 📊 **Statistics** - View current streak, total entries, and completion rate
- 🖨️ **Export Options** - Export single entries or entire journal as PDF/Markdown
- 🔔 **Daily Reminders** - Set custom notification times
- 💾 **Local Storage** - All data stored securely in your browser
- 🎨 **Beautiful UI** - Modern, responsive design with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Slmpire/daily-code-journal.git
cd daily-code-journal
```

## 📁 Project Structure

```
daily-code-journal/
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── ProfileSetup.jsx
│   │   ├── Journal.jsx
│   │   ├── EntryForm.jsx
│   │   ├── HistoryView.jsx
│   │   ├── Stats.jsx
│   │   ├── StreakHistory.jsx
│   │   └── Icons.jsx
│   ├── hooks/
│   │   ├── useJournalData.js
│   │   └── useNotifications.js
│   ├── utils/
│   │   └── journalUtils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```
## 📝 Daily Workflow

1. Open your journal site
2. Write your daily entry
3. Mark if tasks were completed
4. Select your mood
5. Save entry
6. Export as `.md` file
7. Add to your repo:
```bash
git add entries/2025-01-03.md
git commit -m "Journal: Jan 3, 2025"
git push
```

## 🔧 Configuration

### Notification Settings
- Enable/disable daily reminders in the History tab
- Set custom reminder time (default: 6:00 PM)
- Browser notification permission required

### Data Storage
- All data stored in browser localStorage
- Data isolated per email address
- Export regularly to backup

## 🎯 Features Explained

### Streak Tracking
- **Current Streak**: Shows consecutive days with entries
- **Streak History**: All past streaks are preserved
- **Break Detection**: Missing a day breaks the streak but saves history

### Task Completion Score
- Tracks percentage of days where tasks were completed
- Formula: (Completed days / Total days) × 100

### Export Options
- **Single Entry**: Export as Markdown or print/PDF
- **All Entries**: Export entire journal as formatted PDF

## 🤝 Contributing

Feel free to fork and customize for your needs!

## 📄 License

MIT License - feel free to use and modify!

## 🙏 Credits

Built with:
- React + Vite
- Tailwind CSS
- Love for consistent coding habits ❤️

Designed by @Siopight