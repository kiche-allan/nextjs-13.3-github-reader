import './globals.css'
import {Poppins} from 'next/font/google'

const poppins = Poppins ({
  weight: ['400', '600']
})

export const metadata = {
  title: 'Allan Kiche',
  description: 'Github repositories projects' ,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* generate a dummy text */}


    </html>
  )
}
