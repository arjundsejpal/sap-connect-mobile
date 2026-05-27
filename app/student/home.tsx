import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../../components/AppButton';
import { colors } from '../../constants/colors';
import { supabase } from '../../lib/supabase';
import { router } from 'expo-router';

export default function StudentHomeScreen() {
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.eyebrow}>SAP Connect</Text>
        <Text style={styles.title}>Find your next way to help.</Text>
        <Text style={styles.subtitle}>
          Soon this page will show volunteer opportunities, signups, and your logged hours.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>MVP status</Text>
          <Text style={styles.cardText}>Auth works. Profiles work. Student dashboard is next.</Text>
        </View>

        <AppButton title="Log Out" variant="secondary" onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, paddingHorizontal: 28, justifyContent: 'center' },
  eyebrow: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 46,
    marginBottom: 14,
  },
  subtitle: {
    fontSize: 17,
    color: colors.muted,
    lineHeight: 26,
    marginBottom: 28,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 22,
    padding: 20,
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 15,
    color: colors.muted,
    lineHeight: 22,
  },
});