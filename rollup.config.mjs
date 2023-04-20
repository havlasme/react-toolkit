import commonjs from '@rollup/plugin-commonjs'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import externals from 'rollup-plugin-node-externals'
import pkg from './package.json' assert {type: 'json'}

export default [
  {
    input: 'lib/index.js',
    plugins: [
      externals(),
      nodeResolve(),
      commonjs(),
      terser(),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    watch: {
      include: 'lib/**',
    },
  },
]
