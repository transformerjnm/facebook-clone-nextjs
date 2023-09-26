import './globals.css'
import { Inter } from 'next/font/google'
import { lightTheme } from './theme.js'
//import { ThemeProvider } from '@mui/material/styles';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Facebook Clone',
  description: 'The learning lab for nextjs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CssVarsProvider theme={lightTheme}>
        {children}
      </CssVarsProvider>
      </body>
    </html>
  )
}
