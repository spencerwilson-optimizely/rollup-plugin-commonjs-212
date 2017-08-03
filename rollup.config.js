import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/main.js',
  format: 'iife',
  dest: 'bundle.js',
  moduleName: 'example',

  plugins: [
    commonjs(),
  ],
};
