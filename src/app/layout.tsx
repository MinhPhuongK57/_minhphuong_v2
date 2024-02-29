import './globals.css'

import {ChakraProvider} from '@chakra-ui/react'
import Head from 'next/head'
import Header from '../components/Header'
import {Urbanist} from 'next/font/google'

const urbanist = Urbanist({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://minhphuongk57.netlify.app/'),
  title: 'Minh Phuong',
  description: 'This is my portfolio page, thank you for taking a look at it.',
  keywords: ['minhphuongk57', 'minhphuong', 'minhphuongk57 creative developer'],
  openGraph: {
    type: 'website',
    url: 'https://minhphuongk57.netlify.app/',
    title: 'Minh Phuong',
    description:
      'This is my portfolio page, thank you for taking a look at it.',
    image: {
      url: 'https://res.cloudinary.com/dw0wn5gr5/image/upload/v1703710125/image_personal.jpg',
    },
  },
  twitter: {
    card: 'summary_large_image',
    url: 'https://minhphuongk57.netlify.app/',
    site: '@minhphuongk57',
    title: 'Minh Phuong',
    description:
      'This is my portfolio page, thank you for taking a look at it.',
    image: {
      url: 'https://res.cloudinary.com/dw0wn5gr5/image/upload/v1703710125/image_personal.jpg',
    },
  },
}

export default function RootLayout({children}: any) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <link
          rel='icon'
          href='/favicon.icon'
          sizes='any'
          type='image/svg+xml'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/dw0wn5gr5/image/upload/v1703710125/image_personal.jpg'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/dw0wn5gr5/image/upload/v1703710125/image_personal.jpg'
        />
      </Head>
      <ChakraProvider>
        <body className={`${urbanist.className}`}>
          <Header />
          {children}
        </body>
      </ChakraProvider>
    </html>
  )
}
