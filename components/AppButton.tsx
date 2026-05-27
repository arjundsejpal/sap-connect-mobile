import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../constants/colors';

type Props = {
  title: string;
  onPress?: () => void;
  variant?: 'primary' | 'secondary';
};

export function AppButton({ title, onPress, variant = 'primary' }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
      ]}
    >
      <Text
        style={[
          styles.text,
          variant === 'primary' ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.accent,
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
  },
  primaryText: {
    color: colors.surface,
  },
  secondaryText: {
    color: colors.text,
  },
});