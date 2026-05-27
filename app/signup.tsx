import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { router } from 'expo-router';

import { AppButton } from '../components/AppButton';
import { colors } from '../constants/colors';
import { supabase } from '../lib/supabase';

export default function SignupScreen() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignup() {
    console.log('Signup button pressed');
    if (!fullName || !email || !password) {
      Alert.alert('Missing fields', 'Please fill out all fields.');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert('Signup Error', error.message);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert({
          id: data.user.id,
          role: 'student',
          full_name: fullName,
          email,
        });

      if (profileError) {
        Alert.alert('Profile Error', profileError.message);
        return;
      }
    }

    Alert.alert(
      'Account Created',
      'Check your email to confirm your account.'
    );

    router.replace('/');
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.content}
      >
        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Start finding volunteer opportunities today.
        </Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor={colors.muted}
            value={fullName}
            onChangeText={setFullName}
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.muted}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.muted}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />

          <AppButton
            title="Create Account"
            onPress={handleSignup}
          />
        </View>

        <View style={styles.bottom}>
          <AppButton
            title="Back"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 17,
    lineHeight: 26,
    color: colors.muted,
    marginBottom: 36,
    maxWidth: 320,
  },

  form: {
    gap: 16,
  },

  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 18,
    fontSize: 16,
    color: colors.text,
  },

  bottom: {
    marginTop: 24,
  },
});