// Theme configuration for W1 - Supports light/dark mode
// Usage: Import colors and use with Tailwind or CSS variables

export const theme = {
  colors: {
    light: {
      bg: '#ffffff',
      'bg-alt': '#f8f9fa',
      card: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(0, 0, 0, 0.08)',
      text: '#0f0f0f',
      'text-muted': '#6b7280',
      primary: '#3b82f6',
      'primary-hover': '#2563eb',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      'shadow-hover': '0 20px 40px rgba(0, 0, 0, 0.12)',
    },
    dark: {
      bg: '#0a0a0f',
      'bg-alt': '#12121a',
      card: 'rgba(26, 26, 31, 0.8)',
      border: 'rgba(255, 255, 255, 0.08)',
      text: '#f0f0f0',
      'text-muted': '#9ca3af',
      primary: '#60a5fa',
      'primary-hover': '#3b82f6',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
      'shadow-hover': '0 20px 40px rgba(0, 0, 0, 0.4)',
    },
  },
  radius: {
    sm: '0.375rem',   // 6px
    md: '0.5rem',     // 8px
    lg: '1rem',       // 16px - NEW
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
  },
  transitions: {
    fast: '150ms ease',
    smooth: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// CSS Variable generator for global styles
export const generateCSSVariables = (isDark = false) => {
  const mode = isDark ? theme.colors.dark : theme.colors.light;
  return `
    --color-bg: ${mode.bg};
    --color-bg-alt: ${mode['bg-alt']};
    --color-card: ${mode.card};
    --color-border: ${mode.border};
    --color-text: ${mode.text};
    --color-text-muted: ${mode['text-muted']};
    --color-primary: ${mode.primary};
    --color-primary-hover: ${mode['primary-hover']};
    --shadow-card: ${mode.shadow};
    --shadow-hover: ${mode['shadow-hover']};
    --radius-lg: ${theme.radius.lg};
    --transition-smooth: ${theme.transitions.smooth};
  `;
};
