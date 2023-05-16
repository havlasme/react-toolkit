import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import {nodeResolve} from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import externals from 'rollup-plugin-node-externals'
import packagej from './package.json' assert {type: 'json'}

export default [
  {
    input: 'lib/index.js',
    plugins: [
      externals(),
      nodeResolve({extensions: ['.js', '.jsx', '.json']}),
      babel(),
      commonjs(),
      terser(),
    ],
    output: [
      {
        file: packagej.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: packagej.module,
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
