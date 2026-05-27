import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
  children: ReactNode;
};

export function AppCard({ children }: Props) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
});