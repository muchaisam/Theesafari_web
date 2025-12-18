# Theesafari 🌿

Discover Kenya's hidden gems - from secret waterfalls to authentic local restaurants. Theesafari helps travelers explore off-the-beaten-path destinations across Kenya.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-11-orange)](https://firebase.google.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)

## 📱 Mobile App

Get the full experience on Android:

[<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" width="200">](https://play.google.com/store/apps/details?id=app.kodinova.theesafari)

## ✨ Features

- 🗺️ **Explore 100+ Destinations** - Curated hidden gems across Kenya
- 🏷️ **Browse by Category** - Restaurants, nature sanctuaries, adventure parks & more
- 📍 **Location Details** - Coordinates, nearby landmarks, accessibility info
- ⭐ **Ratings & Reviews** - Community-driven recommendations
- 📱 **Responsive Design** - Beautiful on any device

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project with Firestore

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/muchaisam/theesafari_web.git
   cd theesafari_web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your Firebase credentials.

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

Create a `.env.local` file with your Firebase configuration:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

> ⚠️ **Never commit your `.env.local` file!** It's already in `.gitignore`.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** Firebase Firestore
- **Storage:** Firebase Storage
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## 📁 Project Structure

```
app/
├── components/     # Reusable UI components
├── explore/        # Explore page with category filtering
├── hooks/          # Custom React hooks (Firestore)
├── picks/[id]/     # Place detail pages
├── types/          # TypeScript interfaces
└── utils/          # Utility functions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the amazing places in Kenya that inspire us
- The open-source community for incredible tools

---

Made with ❤️ in Kenya