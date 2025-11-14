# 🚀 Run Razorpay Payment Test - Official Instructions

## ❌ Why It's Failing

You're running the app with:
```bash
npm start  # Uses Expo Go
```

**Expo Go DOES NOT support native modules** like `react-native-razorpay`!

---

## ✅ Correct Way (From instruct.md)

### **Step 1: Stop Current App**
Press `Ctrl+C` in terminal to stop Metro bundler

### **Step 2: Prebuild for Expo (Generate Native Folders)**
```bash
npx expo prebuild
```

**What this does:**
- Creates `android/` and `ios/` folders with native code
- Links `react-native-razorpay` native module
- Configures gradle and native dependencies

**Expected output:**
```
✔ Created native directories
✔ Updated package.json
✔ Finished prebuild
```

**If it says "Skip prebuild":**
```bash
npx expo prebuild --clean
```

### **Step 3: Start Emulator**
```bash
# Check available emulators
emulator -list-avds

# Start your emulator
emulator -avd Medium_Phone_API_36.1
```

Or start from Android Studio: **Tools** → **AVD Manager** → Click ▶️ on your emulator

### **Step 4: Build and Run Native App**
```bash
npx expo run:android
```

**What this does:**
- Builds the Android APK with native Razorpay SDK
- Installs on emulator/device
- Starts Metro bundler automatically
- Links all native modules

**This will take 2-5 minutes first time** (downloading gradle, building native code)

**Expected output:**
```
> Task :app:installDebug
Installing APK...
BUILD SUCCESSFUL
Starting Metro Bundler...
```

### **Step 5: Test Payment**

App opens automatically after build:

1. Navigate to **Notes** tab
2. Click **"Select"** on any plan (e.g., Both Papers - ₹999)
3. **Native Razorpay popup opens!** 🎉

You'll see:
- Razorpay payment screen with test card fields
- UPI options
- Pay button

### **Step 6: Complete Test Payment**

Use Razorpay test card:
```
Card: 4111 1111 1111 1111
CVV:  123
Expiry: 12/25
Name: Test User
```

Click **Pay** → Payment succeeds → Redirects to success screen

---

## 🔍 Verify Native Build

Check if you're running natively:

```bash
# While app is running, check console output:
# If you see:
npm start
expo start

# ❌ You're using Expo Go - won't work!

# If you see:
npx expo run:android
Building native app...
Installing APK...

# ✅ You're using native build - will work!
```

---

## ⚠️ Common Issues

### Issue 1: "expo prebuild" fails
```bash
# Clean everything first
rm -rf android ios node_modules
npm install
npx expo prebuild --clean
```

### Issue 2: Build fails with Gradle error
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

### Issue 3: Emulator not detected
```bash
# Make sure emulator is running BEFORE build
emulator -avd Medium_Phone_API_36.1

# In new terminal:
npx expo run:android
```

### Issue 4: "Could not find or load main class org.gradle.wrapper.GradleWrapperMain"
```bash
cd android
chmod +x gradlew
./gradlew clean
cd ..
npx expo run:android
```

---

## 📊 Comparison

| Method | Command | Native Modules | Razorpay | Build Time |
|--------|---------|----------------|----------|------------|
| **Expo Go** | `npm start` | ❌ | ❌ | Instant |
| **Native** | `npx expo run:android` | ✅ | ✅ | 2-5 min |

---

## 🎯 Do This Right Now:

```bash
# 1. Stop current app (Ctrl+C)

# 2. Prebuild (one time)
npx expo prebuild --clean

# 3. Start emulator
emulator -avd Medium_Phone_API_36.1

# 4. Build and run natively
npx expo run:android

# 5. Wait for build (2-5 minutes)

# 6. App opens → Test payment → Razorpay popup opens! 🎉
```

---

## ✅ Expected Flow

When working correctly:

```
User clicks "Select Plan"
  ↓
Console: 🔵 Creating Razorpay order...
  ↓
Console: ✅ Order created: order_xxxxx
  ↓
Console: ✅ Opening native checkout...
  ↓
🎉 Razorpay native popup appears!
  ↓
User enters test card
  ↓
Payment succeeds
  ↓
Console: ✅ Payment verified
  ↓
Redirect to success screen
```

---

## 📝 Key Points from instruct.md

1. ✅ `react-native-razorpay` is installed
2. ❌ **YOU MUST RUN NATIVELY** (not Expo Go)
3. ✅ Order creation works (we fixed server-side)
4. ❌ Native SDK won't work without native build
5. ✅ Use `npx expo run:android` (as per instruct.md)

---

## 🚨 IMPORTANT

**DON'T:**
- ❌ Use `npm start` for testing payments
- ❌ Use Expo Go app for testing payments
- ❌ Expect native modules to work in Expo Go

**DO:**
- ✅ Use `npx expo run:android`
- ✅ Build with native code
- ✅ Test on emulator or physical device with native build

---

**Run the commands above NOW and Razorpay will work!** 🚀
