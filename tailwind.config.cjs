module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },

    fontFamily: {
      twitter: ['TwitterChirp', '-apple-system', 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Noto Sans', 'sans-serif'],
    },

    colors: {
      primary: {
        10: 'rgba(29, 155, 240, 0.1)',
        100: 'rgb(29, 155, 240)',
        200: 'rgb(26, 140, 216)',
      },

      retweet: {
        10: 'rgba(0, 186, 124, 0.1)',
        100: 'rgb(0, 186, 124)',
      },

      liked: {
        10: 'rgba(249, 24, 128, 0.1)',
        100: 'rgb(249, 24, 128)',
      },

      gray: {
        100: 'rgb(231, 233, 234)',
        200: 'rgb(113, 118, 123)',
        300: 'rgb(47, 51, 54)',
        400: 'rgb(22, 24, 28)',
      },

      black: 'rgb(0, 0, 0)',
      white: 'rgb(255, 255, 255)',
      transparent: 'transparent',
    },
  },
}
