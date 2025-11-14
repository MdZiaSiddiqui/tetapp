# TET App Payment Backend

Simple Express server for handling Razorpay payments.

## Local Development

1. Install dependencies:
```bash
cd backend
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Add your Razorpay credentials to `.env`:
```
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=your_secret_here
```

4. Run locally:
```bash
npm run dev
```

Server runs on `http://localhost:3000`

## Deploy to Vercel (Free)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Add `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`

4. Copy the deployment URL (e.g., `https://your-app.vercel.app`)

5. Update `EXPO_PUBLIC_PAYMENT_API_URL` in your React Native app's `.env`

## Alternative: Deploy to Railway

1. Go to [railway.app](https://railway.app)
2. Create new project from GitHub
3. Add environment variables in Railway dashboard
4. Copy the deployment URL

## Endpoints

- `GET /` - Health check
- `POST /create-order` - Create Razorpay order
- `POST /verify-payment` - Verify payment signature
