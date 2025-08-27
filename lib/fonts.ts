// Global font configuration for Typus AI
export const typusFont = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  fontWeight: {
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    black: '900'
  }
};

// CSS class for consistent font application
export const fontClass = 'font-inter';

// Utility function to get font styles
export const getFontStyle = (weight: keyof typeof typusFont.fontWeight = 'normal') => ({
  fontFamily: typusFont.fontFamily,
  fontWeight: typusFont.fontWeight[weight]
});