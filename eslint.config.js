import { config } from '@kolhe/eslint-config'

export default config(
  [
    {
      ignores: ['.vercel-sim/**']
    },
    {
      files: ['src/**/*.ts'],
      rules: {
        'import/no-default-export': 'off'
      }
    }
  ],
  {
    prettier: true,
    markdown: true
  }
)
