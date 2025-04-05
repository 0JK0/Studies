#!/bin/bash

# Exit script on error
set -e

echo "🚀 Setting up BasicBs4 React Native project..."

# Create project folder
mkdir -p BasicBs4
cd BasicBs4

# Initialize a new React Native project (Using Expo for simplicity)
echo "📦 Initializing React Native project with Expo..."
npx create-expo-app . --template

# Install dependencies
echo "📌 Installing dependencies..."
npm install react-native-calendars react-native-paper react-native-video firebase @react-native-async-storage/async-storage react-native-sqlite-storage

# Firebase setup
echo "🔥 Setting up Firebase..."
npm install firebase

# Initialize Firebase config file
cat <<EOF > firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

export const app = initializeApp(firebaseConfig);
EOF

echo "✅ Firebase setup complete! Don't forget to add your credentials in firebaseConfig.js"

# Install web dependencies
echo "🌐 Installing web dependencies..."
npx expo install react-dom react-native-web @expo/metro-runtime

echo "✅ Firebase setup complete! Don't forget to add your credentials in firebaseConfig.js"


# Done!
echo "🎉 BasicBs4 setup is complete! Run 'cd BasicBs4 && npm start' to begin development."

