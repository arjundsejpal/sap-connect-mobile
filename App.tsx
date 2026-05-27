import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>SAP</Text>

        <Text style={styles.title}>
          Volunteer smarter.
        </Text>

        <Text style={styles.subtitle}>
          Find opportunities, track hours, and support causes that matter.
        </Text>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>I already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const colors = {
  background: '#F5F3EF',
  text: '#121212',
  accent: '#D46A6A',
  muted: '#6B6B6B',
  white: '#FFFFFF',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  logo: {
    fontSize: 72,
    fontWeight: '900',
    color: colors.text,
    marginBottom: 12,
    letterSpacing: -4,
  },

  title: {
    fontSize: 42,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 46,
    marginBottom: 16,
    maxWidth: 300,
  },

  subtitle: {
    fontSize: 18,
    color: colors.muted,
    lineHeight: 28,
    marginBottom: 40,
    maxWidth: 320,
  },

  primaryButton: {
    backgroundColor: colors.accent,
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 14,
  },

  primaryButtonText: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '700',
  },

  secondaryButton: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },

  secondaryButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '600',
  },
});