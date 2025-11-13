# TGTET - TG TET Exam Practice App

A comprehensive TG TET exam preparation app built with React Native (Expo), Supabase, and AI-powered features.

## Features

### 🎯 Practice Mode
- **Customizable Practice Sessions**
  - Select difficulty levels (Easy, Medium, Difficult)
  - Choose question types (MCQ, Image-based, Case-based)
  - Filter by subjects
  - Set custom question count and timer
- **Real-time Timer** with countdown
- **Bookmark Questions** for later review
- **Instant Feedback** with explanations
- **Progress Tracking** during sessions

### 🔄 Revision Mode
- **Recent Mistakes** - Review wrong attempts from last 3 days
- **Bookmarked Questions** - Practice saved questions
- **Deep Revision** - All incorrectly answered questions
- **Subject Filtering** for targeted revision
- **Progress Monitoring** to track improvement

### 📊 Analytics Dashboard
- **Overall Performance** metrics
- **Success Rate by Difficulty** with visual charts
- **Subject-wise Performance** breakdown
- **Level System** based on questions attempted
- **Progress Tracking** over time

### ✨ ImproveX AI Features
- **Study Material Generation** - AI-generated comprehensive study guides
- **Flashcard Creation** - Auto-generated flashcards for key concepts
- **Practice Question Generation** - Similar questions for weak areas
- **Personalized Recommendations** based on performance

### 👤 User Features
- **Email & Password Authentication**
- **Social Login** (Google, Apple)
- **User Profile Management**
- **Level & Progress System**
- **Performance Statistics**

## Tech Stack

- **Frontend**: React Native (Expo), TypeScript
- **Routing**: Expo Router (file-based)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **State Management**: React Query, Zustand
- **AI**: Anthropic Claude API (via Supabase Edge Functions)

## Project Structure

```
tet/
├── app/                          # Expo Router app directory
│   ├── (auth)/                   # Authentication screens
│   │   ├── welcome.tsx
│   │   ├── login.tsx
│   │   └── signup.tsx
│   ├── (tabs)/                   # Main app tabs
│   │   ├── home.tsx              # Home dashboard
│   │   ├── practice.tsx          # Practice mode settings
│   │   ├── revision.tsx          # Revision mode settings
│   │   ├── analytics.tsx         # Analytics dashboard
│   │   └── profile.tsx           # User profile
│   ├── practice/                 # Practice session screens
│   │   ├── session.tsx           # Practice session
│   │   └── results.tsx           # Session results
│   ├── revision/                 # Revision session screens
│   │   └── session.tsx           # Revision session
│   ├── _layout.tsx               # Root layout
│   └── index.tsx                 # App entry point
├── components/                   # Reusable components
├── lib/                          # Utilities and services
│   ├── supabase.ts              # Supabase client
│   ├── auth-context.tsx         # Authentication context
│   └── ai-service.ts            # AI features
├── types/                        # TypeScript types
│   └── database.types.ts        # Database types
├── supabase/                     # Supabase configuration
│   ├── migrations/              # Database migrations
│   │   └── 001_initial_schema.sql
│   └── functions/               # Edge functions
│       └── generate-study-content/
│           └── index.ts
├── global.css                    # Global styles
├── tailwind.config.js           # Tailwind configuration
└── package.json
```

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ and npm/yarn
- Expo CLI (`npm install -g expo-cli`)
- Supabase account
- Anthropic API key (for AI features)

### 2. Install Dependencies
```bash
npm install
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)

2. Run the database migration:
   - Go to Supabase Dashboard → SQL Editor
   - Copy and paste the contents of `supabase/migrations/001_initial_schema.sql`
   - Run the migration

3. Enable Authentication Providers:
   - Go to Authentication → Providers
   - Enable Email authentication
   - Configure Google OAuth (optional)
   - Configure Apple OAuth (optional)

4. Deploy Edge Function:
```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy the function
supabase functions deploy generate-study-content --no-verify-jwt

# Set secrets
supabase secrets set AI_API_KEY=your-anthropic-api-key
```

### 4. Environment Variables

Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Update with your credentials:
```
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
EXPO_PUBLIC_AI_API_KEY=your-anthropic-api-key
```

### 5. Run the App

```bash
# Start the development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Database Schema

### Tables

- **users** - Extended user profiles
- **subjects** - TET subjects (Language, Mathematics, Science, etc.)
- **questions** - Question bank with MCQ, image, and case-based types
- **case_scenarios** - Clinical case scenarios
- **user_attempts** - Track all user answers and performance
- **bookmarks** - Saved questions for later review
- **ai_study_content** - AI-generated study materials

### Key Features
- **Row Level Security (RLS)** enabled on all tables
- **Automatic user profile creation** on signup
- **Automatic level calculation** based on questions attempted
- **Indexes** for optimized query performance

## Adding Questions

To populate the app with questions, you can:

1. Use the Supabase Dashboard to manually add questions
2. Create a seed script to bulk import questions
3. Build an admin panel (future feature)

Example question format:
```sql
INSERT INTO questions (
  subject_id,
  question_text,
  question_type,
  difficulty,
  options,
  correct_answer,
  explanation
) VALUES (
  'subject-uuid',
  'What is the normal resting heart rate?',
  'mcq',
  'easy',
  '{"A": "40-60 bpm", "B": "60-100 bpm", "C": "100-120 bpm", "D": "120-140 bpm"}',
  'B',
  'The normal resting heart rate for adults is 60-100 beats per minute.'
);
```

## AI Features Configuration

The AI features use Anthropic's Claude API. To enable:

1. Get an API key from [anthropic.com](https://anthropic.com)
2. Add it to Supabase secrets (as shown in setup)
3. The edge function will automatically handle AI content generation

## Future Enhancements

- [ ] Offline mode support
- [ ] Push notifications for study reminders
- [ ] Spaced repetition algorithm
- [ ] Community features (leaderboards, discussions)
- [ ] Video explanations
- [ ] Admin panel for question management
- [ ] Advanced analytics and insights
- [ ] Dark mode support
- [ ] Multi-language support

## Contributing

This is a private project. For any questions or issues, please contact the development team.

## License

All rights reserved.
