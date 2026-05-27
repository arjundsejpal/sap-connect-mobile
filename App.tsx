import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from './components/AppButton';
import { colors } from './constants/colors';

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

        <AppButton title="Get Started" />

        <View style={styles.spacing} />

        <AppButton
          title="I already have an account"
          variant="secondary"
        />
      </View>
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

  spacing: {
    height: 14,
  },
});