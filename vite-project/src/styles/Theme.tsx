import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

const round = (num: number) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px: number) => `${round(px / 16)}rem`

export const theme: DefaultTheme = {
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    circular: rem(50),
  },
  breakpoints: {
    sm: '576px', // Pequeno - dispositivos móveis em retrato
    md: '768px', // Médio - tablets e dispositivos móveis em paisagem
    lg: '992px', // Grande - laptops e desktops
    xl: '1200px', // Extra grande - monitores maiores
  },
  spacing: {
    xs: rem(4),   // Extra pequeno
    sm: rem(8),   // Pequeno
    md:  rem(16),  // Médio
    lg:  rem(24),  // Grande
    xl:  rem(32),  // Extra grande
  },
  colors: {
    white100: '#FFFFFF',
    white200: '#C4C4CC',
    black: '#121214',
    red: '#F75A67',
    redDark: '#AA2864',
    green: '#00875f',
    greenLigth: '#00B37E',
    greenDark: '#015F43',
    gray100: '#121214',
    gray200: '#202024',
    gray300: '#29292e',
    gray400: '#323238',

  },
  fontFamily: {
    heading: ['Baloo 2', 'sans-serif'].join(','),
    sans: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'].join(','),
    mono: ['IBM Plex Mono', 'serif'].join(','),
  },
  fontSize: {
    xs: rem(14),
    sm: rem(16),
    md: rem(20),
    base: rem(24),
    lg: rem(32),

  },
}

interface ThemeProps {
  children: ReactNode
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
