import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const siteName = 'WebWorkWords'
const description =
  'ウェブにまつわる技術を、直感的に理解でき、業務レベルに引き上げてくれるアプリです。イラストを用いた、わかりやすい言葉の解説と、それを業務レベルに引き上げるクイズで学びたい方はお試しください。'

export const metadata = {
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    image: '#',
    site: '',
    siteName,
    locale: 'ja_JP',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '',
    creator: ''
  }
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
