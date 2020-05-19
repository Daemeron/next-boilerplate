import { ThemeProps } from 'styled-components';

export const Theme = {
  light: {},
  dark: {},
};

export type ThemePropsInterface = ThemeProps<{ style?: keyof typeof Theme }>;
