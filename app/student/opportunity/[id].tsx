import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

import { AppButton } from '../../../components/AppButton';
import { colors } from '../../../constants/colors';
import { mockOpportunities } from '../../../data/mockOpportunities';

export default function OpportunityDetailScreen() {
  const { id } = useLocalSearchParams();

  const opportunity = mockOpportunities.find(
    (item) => item.id === id
  );

  if (!opportunity) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Opportunity not found.</Text>

          <AppButton
            title="Go Back"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.category}>
          {opportunity.category}
        </Text>

        <Text style={styles.title}>
          {opportunity.title}
        </Text>

        <Text style={styles.organization}>
          {opportunity.organization}
        </Text>

        <View style={styles.section}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{opportunity.date}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{opportunity.time}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{opportunity.location}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Volunteer Hours</Text>
          <Text style={styles.value}>
            {opportunity.hours} hours
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Spots Remaining</Text>
          <Text style={styles.value}>
            {opportunity.spotsLeft}
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <AppButton title="Sign Up" />

          <View style={styles.spacing} />

          <AppButton
            title="Back"
            variant="secondary"
            onPress={() => router.back()}
          />
        </View>
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
    paddingHorizontal: 28,
    paddingTop: 48,
  },

  category: {
    color: colors.accent,
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 14,
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 44,
    marginBottom: 10,
  },

  organization: {
    fontSize: 18,
    color: colors.muted,
    marginBottom: 36,
  },

  section: {
    marginBottom: 22,
  },

  label: {
    fontSize: 13,
    fontWeight: '800',
    color: colors.muted,
    marginBottom: 6,
    textTransform: 'uppercase',
  },

  value: {
    fontSize: 18,
    color: colors.text,
    lineHeight: 28,
  },

  buttonGroup: {
    marginTop: 20,
  },

  spacing: {
    height: 14,
  },
});