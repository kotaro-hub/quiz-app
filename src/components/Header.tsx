import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <h1>WebWorkWords</h1>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/learn">学習</Link>
        </li>
        <li>
          <Link href="/quiz">クイズ</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
