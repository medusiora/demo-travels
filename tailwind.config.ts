import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
        'source-code-pro': ['Source Code Pro', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        dark: '#1c1b22',
      },
    },
  },
}
