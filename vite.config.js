import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

// export default defineConfig({
//   build: {
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         onboardingOne: resolve(__dirname, 'src/views/onboardingOne/index.html'),
//         onboardingTwo: resolve(__dirname, 'src/views/onboardingTwo/index.html'),
//         onboardingThree: resolve(__dirname, 'src/views/onboardingThree/index.html'),
//         auth: resolve(__dirname, 'src/views/auth/index.html'),
//         home: resolve(__dirname, 'src/views/home/index.html'),
//         archive: resolve(__dirname, 'src/views/archive/index.html'),
//         popular: resolve(__dirname, 'src/views/popular/index.html'),
//         settings: resolve(__dirname, 'src/views/settings/index.html'),
//       },
//     },
//   },
// });

import { existsSync } from 'node:fs';

const inputs = {
  main: resolve(__dirname, 'index.html'),
  onboardingOne: resolve(__dirname, 'src/views/onboardingOne/index.html'),
  onboardingTwo: resolve(__dirname, 'src/views/onboardingTwo/index.html'),
  onboardingThree: resolve(__dirname, 'src/views/onboardingThree/index.html'),
  auth: resolve(__dirname, 'src/views/auth/index.html'),
  home: resolve(__dirname, 'src/views/home/index.html'),
  archive: resolve(__dirname, 'src/views/archive/index.html'),
  popular: resolve(__dirname, 'src/views/popular/index.html'),
  settings: resolve(__dirname, 'src/views/settings/index.html'),
};

const filteredInputs = Object.fromEntries(
  Object.entries(inputs).filter(([key, value]) => existsSync(value))
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: filteredInputs,
    },
  },
});