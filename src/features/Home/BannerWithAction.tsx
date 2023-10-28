import Button from '@/components/Button'
import Link from 'next/link'

const BannerWithAction = () => {
  return (
    <div>
      <h2>Webにまつわる技術や用語、わかる言葉で理解する。</h2>
      <p>
        技術や用語をイラストと言葉で一つずつ理解し、それらを組み合わせたクイズで、実践的な知識を身につけることができます。
      </p>
      <Button>
        <Link href="/learn">学習する</Link>
      </Button>
    </div>
  )
}

export default BannerWithAction
