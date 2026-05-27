import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { AppButton } from '../../components/AppButton';
import { colors } from '../../constants/colors';
import { mockOpportunities } from '../../data/mockOpportunities';
import { supabase } from '../../lib/supabase';

export default function StudentHomeScreen() {
  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={mockOpportunities}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Text style={styles.eyebrow}>SAP Connect</Text>
            <Text style={styles.title}>Find your next way to help.</Text>
            <Text style={styles.subtitle}>
              Browse volunteer opportunities near your school and keep your hours organized.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardTop}>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.spots}>{item.spotsLeft} spots left</Text>
            </View>

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.org}>{item.organization}</Text>

            <View style={styles.details}>
              <Text style={styles.detail}>{item.date}</Text>
              <Text style={styles.detail}>{item.time}</Text>
              <Text style={styles.detail}>{item.location}</Text>
              <Text style={styles.detail}>{item.hours} volunteer hours</Text>
            </View>

            <AppButton
              title="View Opportunity"
              onPress={() => router.push(`/student/opportunity/${item.id}`)}
            />
          </View>
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <AppButton title="Log Out" variant="secondary" onPress={handleLogout} />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },
  eyebrow: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 12,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 44,
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
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  category: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '800',
  },
  spots: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: '700',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 6,
  },
  org: {
    fontSize: 15,
    color: colors.muted,
    marginBottom: 16,
  },
  details: {
    gap: 6,
    marginBottom: 18,
  },
  detail: {
    fontSize: 15,
    color: colors.text,
  },
  footer: {
    marginTop: 10,
  },
});