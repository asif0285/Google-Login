
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { GoogleSignInButton } from './components/GoogleSignInButton';
import { UserProfile } from './components/UserProfile';
import { tokenCache } from './utils/cache';


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_Zmx1ZW50LWdpYmJvbi0yNy5jbGVyay5hY2NvdW50cy5kZXYk';

function App() {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Google Auth with Clerk</Text>
          
          <SignedIn>
            <UserProfile />
          </SignedIn>
          
          <SignedOut>
            <GoogleSignInButton />
          </SignedOut>
        </ScrollView>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
});

export default App;
