# Google Login with Clerk

A modern React Native mobile application that implements secure Google authentication using Clerk. This app demonstrates a complete authentication flow with user profile management.

## Overview

This is an Expo-based React Native application that provides seamless Google login integration powered by Clerk. Users can authenticate with their Google accounts, view their profile information, and securely sign out.

## Features

✅ **Google OAuth Authentication** - Secure sign-in using Google accounts  
✅ **Clerk Integration** - Enterprise-grade authentication platform  
✅ **User Profile Display** - View authenticated user information  
✅ **Session Management** - Persistent session handling with token caching  
✅ **Secure Sign Out** - Session termination and cleanup  
✅ **Cross-Platform Support** - Works on iOS, Android, and Web  
✅ **Expo Support** - Easy development and deployment with Expo  

## Project Structure

```
LoginWithGoogle/
├── App.js                          # Main app component with navigation flow
├── index.js                        # Entry point
├── package.json                    # Project dependencies
├── app.json                        # Expo configuration
├── eas.json                        # EAS Build configuration
├── components/
│   ├── GoogleSignInButton.js       # OAuth sign-in button component
│   └── UserProfile.js              # User profile display component
├── utils/
│   └── cache.js                    # Token cache management
└── assets/                         # Static assets
```

## Technology Stack

- **React Native** (v0.79.3)
- **Expo** (v53.0.11)
- **React** (v19.0.0)
- **Clerk** (@clerk/clerk-expo v2.13.1)
- **Expo Auth Session** (v6.2.0)
- **Async Storage** (v2.1.2)

## Prerequisites

Before you start, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- A Clerk account with Google OAuth configured
- Your Google OAuth credentials

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asif0285/Google-Login.git
   cd LoginWithGoogle
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
   ```

   Get your Clerk publishable key from the [Clerk Dashboard](https://dashboard.clerk.com/).

4. **Configure Clerk**
   - Go to the Clerk Dashboard
   - Enable Google OAuth
   - Add your redirect URLs (including your ngrok URL or localhost)

## Running the App

### Development Server
```bash
npm start
```

This will open the Expo DevTools where you can choose to run on:
- **Android**: Press `a` or use `npm run android`
- **iOS**: Press `i` or use `npm run ios`
- **Web**: Press `w` or use `npm run web`

## Component Details

### GoogleSignInButton.js
Handles the OAuth flow using Clerk's `useOAuth` hook. Manages the sign-in process and error handling.

**Key features:**
- Initiates OAuth flow with Clerk
- Creates/manages user sessions
- Displays authentication errors

### UserProfile.js
Displays authenticated user information after successful sign-in.

**Displays:**
- User profile image (or placeholder)
- Full name
- Email address
- User ID
- Account creation date
- Sign out button

## Authentication Flow

1. User opens the app → **SignedOut** view displays (Google Sign In button)
2. User taps "Sign in with Google" → Redirected to Google login
3. Google authentication → Clerk creates/updates session
4. Session established → **SignedIn** view displays (User Profile)
5. User profile displays user information
6. User taps "Sign Out" → Session terminated → Returns to SignedOut view

## Security Features

- 🔒 **Secure Token Storage** - Tokens stored in device secure storage
- 🔐 **OAuth 2.0 Flow** - Industry-standard authentication
- 📱 **PKCE Support** - Protection against authorization code interception
- 🛡️ **Session Management** - Automatic token refresh and validation

## Building for Production

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

## Environment Configuration

The app uses the following environment variable:
- `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY` - Your Clerk public key (required)

Default test key is included but should be replaced with your production key.

## Dependencies Overview

| Package | Purpose |
|---------|---------|
| `@clerk/clerk-expo` | Authentication framework |
| `expo-auth-session` | OAuth session management |
| `expo-google-app-auth` | Google authentication |
| `@react-native-async-storage/async-storage` | Local data persistence |
| `expo-secure-store` | Secure token storage |
| `expo-web-browser` | OAuth redirect handling |

## Troubleshooting

### "Failed to sign in with Google"
- Verify your Clerk credentials are correct
- Check that Google OAuth is enabled in Clerk Dashboard
- Confirm redirect URLs are properly configured

### "Invalid session"
- Clear app cache
- Remove and reinstall the app
- Check token validity in Clerk Dashboard

### Deep linking issues
- Ensure the redirect URL scheme matches your app identifier
- On iOS, check URL schemes in app.json

## API Reference

### GoogleSignInButton
```javascript
<GoogleSignInButton />
```
Displays a Google sign-in button and manages the authentication flow.

### UserProfile
```javascript
<UserProfile />
```
Displays user information and sign-out button.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Resources

- [Clerk Documentation](https://clerk.com/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2)

## Support

For issues or questions:
1. Check the [Clerk Support](https://support.clerk.com/)
2. Review [Expo Community Issues](https://github.com/expo/expo/issues)
3. Open an issue in this repository

---

**Author**: Asif  
**Repository**: [Google-Login](https://github.com/asif0285/Google-Login)  
**Last Updated**: April 2026
