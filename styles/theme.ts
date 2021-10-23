const greyColors = {
  grey50: 'hsl(265, 55%, 96%)',
  grey100: 'hsl(265, 19%, 88%)',
  grey200: 'hsl(265, 7%, 70%)',
  grey300: 'hsl(265, 6%, 66%)',
  grey400: 'hsl(265, 4%, 57%)',
  grey500: 'hsl(265, 3%, 53%)',
  grey600: 'hsl(265, 4%, 42%)',
  grey700: 'hsl(265, 4%, 31%)',
  grey800: 'hsl(276, 5%, 20%)',
  grey900: 'hsl(280, 5%, 13%)',
};

const primaryColors = {
  primary50: '#c8b3ce',
  primary100: '#a07aaa',
  primary200: '#884c97',
  primary300: '#843897',
  primary400: '#732392',
  primary500: '#5a097a',
  primary600: '#480264',
  primary700: '#3d0264',
};

const successColors = {
  success100: '#a2f0bc',
  success500: '#12bd4b',
};

const errorColors = {
  error100: '#f1acc9',
  error500: '#a10c4a',
};

const sizes = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  16: '4rem',
  20: '5rem',
  40: '10rem',
};

const theme = {
  colors: {
    ...greyColors,
    ...primaryColors,
    ...successColors,
    ...errorColors,
  },
  size: sizes,
};

export default theme;
