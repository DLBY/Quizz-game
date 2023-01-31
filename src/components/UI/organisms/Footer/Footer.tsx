import { Text } from '@/components';
import clsx from 'clsx';

export const Footer = () => {
  return (
    <footer className={clsx(
      "absolute bottom-6"
      )}>
      <Text variant="white" size="lg">
        © 2023 - <a href="https://github.com/DLBY" target="_blank">DLBY</a>
      </Text>
    </footer>
  );
};