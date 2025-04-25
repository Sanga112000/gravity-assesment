// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    tailwindcss(), // Correctly referencing the new PostCSS plugin
    autoprefixer(),
  ],
};
