# 📔 Daily Code Journal

A beautiful, cloud-synced journaling application designed for developers to track their coding journey, maintain streaks, and analyze their progress over time.

![Daily Code Journal](https://img.shields.io/badge/React-18.x-blue)
![Firebase](https://img.shields.io/badge/Firebase-10.x-orange)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 📱 **Fully Responsive Design**
- **Desktop/Tablet**: Classic top navigation with full-width layouts
- **Mobile**: WhatsApp-style bottom navigation with optimized touch targets
- Seamless experience across all devices

### 🔐 **Multi-Device Authentication**
- Sign in with email and password from any device
- Automatic account creation for new users
- Persistent sessions with "Remember Me" option
- Password reset functionality
- Secure Firebase Authentication

### ☁️ **Cloud Sync**
- Real-time data synchronization across all devices
- Access your journal from phone, tablet, or desktop
- Automatic backup to Firebase Cloud

### 📊 **Progress Tracking**
- **Current Streak**: Track consecutive days of journaling
- **Total Entries**: See your complete history
- **Completion Rate**: Monitor your consistency
- **Visual Streak History**: 30-day calendar view

### 📈 **Dashboard Analytics**
- Mood tracking with visual charts
- Habit tracker integration
- Progress overview and statistics
- Achievement tracking

### 📝 **Rich Entry Management**
- Date-based entry creation
- Full markdown support
- Export entries to Markdown or PDF
- Print individual entries
- Search and browse history

### 🎨 **Beautiful UI**
- Modern glassmorphism design
- Purple gradient theme
- Smooth animations and transitions
- Dark mode optimized
- Accessible and user-friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn
- Firebase account
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/slimpire/daily-code-journal.git
   cd daily-code-journal
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Firebase**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
daily-code-journal/
├── src/
│   ├── components/
│   │   ├── Journal.jsx          # Main journal component
│   │   ├── Stats.jsx            # Statistics cards
│   │   ├── StreakHistory.jsx    # Streak visualization
│   │   ├── EntryForm.jsx        # Entry editor
│   │   ├── HistoryView.jsx      # Entry history browser
│   │   ├── Dashboard.jsx        # Analytics dashboard
│   │   ├── MoodChart.jsx        # Mood tracking chart
│   │   ├── HabitTracker.jsx     # Habit tracking
│   │   └── Icons.jsx            # Icon components
│   ├── hooks/
│   │   ├── useAuth.js           # Authentication hook
│   │   ├── useJournalData.js    # Journal data management
│   │   └── useNotifications.js  # Notification settings
│   ├── firebase.js              # Firebase configuration
│   └── App.jsx                  # Root component
├── public/
├── .env                         # Environment variables
├── package.json
└── README.md
```

## 🔧 Configuration

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** → Email/Password
4. Enable **Firestore Database**
5. Copy your config to `.env`

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 📱 Mobile Optimization

The app features a responsive design that adapts to different screen sizes:

### Desktop (md+)
- Top navigation tabs
- Multi-column layouts
- Larger text and spacing

### Mobile (<md)
- Bottom navigation (WhatsApp-style)
- Single-column layouts
- Optimized touch targets
- Compact spacing

## 🎯 Usage Guide

### Creating Your First Entry

1. **Sign Up/Login**: Enter your email and password
2. **Navigate to "Today's Entry"**: Use the navigation
3. **Write Your Entry**: Document what you coded today
4. **Save**: Click the save button to sync to cloud

### Viewing Your Progress

1. **Dashboard**: See your overall statistics and charts
2. **Streak History**: Visual representation of your consistency
3. **History**: Browse all past entries

### Exporting Data

- **Single Entry**: Use "Export" button on entry form
- **All Entries**: Use "Export All" in History view
- **Print**: Print individual entries directly

## 🔒 Security Features

- ✅ Secure Firebase Authentication
- ✅ Email/Password encryption
- ✅ User data isolation (can only access own data)
- ✅ Session persistence with secure tokens
- ✅ Password reset via email
- ✅ Multi-device session management

## 🛠️ Tech Stack

- **Frontend**: React 18+ with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Build Tool**: Vite
- **Deployment**: Firebase Hosting (recommended)

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "firebase": "^10.7.0",
  "lucide-react": "^0.263.1",
  "tailwindcss": "^3.3.0"
}
```

## 🚢 Deployment

### Deploy to Firebase Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

3. **Login to Firebase**
   ```bash
   firebase login
   ```

4. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```

5. **Deploy**
   ```bash
   firebase deploy
   ```

### Deploy to Vercel/Netlify

Both platforms support automatic deployment from Git repositories.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- None at the moment! Report issues on GitHub.

## 🗺️ Roadmap

- [ ] Rich text editor with markdown preview
- [ ] Tags and categories for entries
- [ ] Search functionality
- [ ] Weekly/Monthly reports
- [ ] Social sharing features
- [ ] Dark/Light theme toggle
- [ ] Offline mode support
- [ ] Mobile app (React Native)
- [ ] AI-powered insights

## 💡 Tips

- **Daily Habit**: Set a specific time each day to write
- **Be Consistent**: Even a short entry counts for your streak
- **Use Tags**: Organize entries by project or topic
- **Review Weekly**: Look back at your progress regularly
- **Export Regularly**: Keep local backups of your entries

## 📧 Support

For support, open an issue on [GitHub](https://github.com/slimpire/daily-code-journal/issues).

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Inspired by the developer journaling community
- Built with ❤️ for developers by developers

---

**Happy Journaling! 🚀📝**

Made with 💜 by Pelumi ([@slimpire](https://github.com/slimpire))