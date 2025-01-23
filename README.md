# React Native Project: Todo App

This project is a **React Native** application, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli). It is designed to fetch and display data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) and implement a design as per the provided PDF.

## Features

- Fetch data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos).
- Display data in the **Activities** tab.
- Clean and modular code.
- Attention to detail and adherence to the provided design.

---

## Prerequisites

Before starting, make sure you have completed the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup) for your platform (macOS/Windows/Linux). Specifically:
- **Node.js** (LTS version recommended).
- **React Native CLI**.
- **Android Studio** for Android emulators.

> **Note**: Ensure that you can create and run a basic React Native application before proceeding.

---

## Getting Started

### Step 1: Clone the Repository

```bash
git clone https://github.com/asif-ae/react_native_test_002.git
cd react_native_test_002
```

---

### Step 2: Install Dependencies

Install the required packages using either `npm`:

```bash
# using npm
npm install
```

---

### Step 3: Start the Metro Server

Metro is the JavaScript bundler for React Native. Start it with:

```bash
# using npm
npm start
```

---

### Step 4: Run the Application

#### For Android

Ensure your emulator is running or a physical device is connected with USB debugging enabled.

```bash
# using npm
npm run android
```

#### For iOS (if applicable)

Ensure you have Xcode installed and properly configured.

```bash
# using npm
npm run ios
```

---

### Step 5: Fetch and Display Data

The app automatically fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos) and displays it in the **Activities** tab. Follow these steps to test the data rendering:
* Open the `Activities` tab in the app to see the data rendered.

---

## Project File Structure

```plaintext
.
├── android/                  # Native Android code
├── ios/                      # Native iOS code
├── node_modules/             # Node.js dependencies
├── src/
│   ├── api/                  # API configuration and calls
│   │   └── todos.ts          # API for fetching todos data
│   ├── assets/               # Static assets like images
│   │   └── album.png         # Sample album image
│   ├── components/           # Reusable components
│   │   ├── Activities/
│   │   │   ├── ErrorState.tsx      # Error state UI for activities
│   │   │   ├── Loading.tsx         # Loading indicator for activities
│   │   │   └── TodoCard.tsx        # Card for individual todo items
│   │   ├── Bookings/
│   │   │   ├── DatePicker.tsx      # Date picker component
│   │   │   ├── Header.tsx          # Header component
│   │   │   ├── SearchBar.tsx       # Search bar component
│   │   │   └── TimePicker.tsx      # Time picker component
│   │   └── Spacer.tsx              # Spacer component for consistent spacing
│   ├── navigation/           # Navigation configuration
│   │   └── Navigation.tsx    # Main navigation setup
│   ├── screens/              # App screens
│   │   ├── ActivitiesScreen.tsx    # Screen for activities
│   │   ├── BookingsScreen.tsx      # Screen for bookings
│   │   ├── MenuScreen.tsx          # Screen for menu
│   │   └── NotificationsScreen.tsx # Screen for notifications
│   ├── types/                # Shared TypeScript types
│   │   └── index.ts          # TypeScript type definitions
├── package.json              # Project dependencies
├── App.tsx                   # Main entry point of the app
├── README.md                 # Documentation for the project
```

---

## Building a Release APK (Android)

1. Navigate to the `android` directory:
   ```bash
   cd android
   ```

2. Build the APK:
   ```bash
   ./gradlew assembleRelease
   ```

3. Find the APK in the following location:
   ```plaintext
   android/app/build/outputs/apk/release/app-universal-release.apk
   ```

---

## Troubleshooting

If you encounter issues, refer to the [Troubleshooting Guide](https://reactnative.dev/docs/troubleshooting).

### Common Issues
- **Metro Bundler not starting**:
  ```bash
  npx react-native start --reset-cache
  ```
- **Android emulator not found**: Ensure you have started the emulator in Android Studio or connected a device via USB.
- **Build errors**: Run `npm install` again to ensure all dependencies are installed.

---

### Congratulations! 🎉

You have successfully set up the environment and run the **React Native Todo App**! 🚀
