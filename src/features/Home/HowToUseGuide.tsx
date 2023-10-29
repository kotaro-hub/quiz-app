import Image from 'next/image'

import Button from '@/components/Button'

const HowToUseGuide = () => {
  return (
    <section>
      <h3>このアプリの使い方</h3>
      <div>
        <Image src="#" alt="" />
        <div>
          <h4>カードで学ぶ</h4>
          <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          <Button>カードで学ぶ</Button>
        </div>
      </div>
      <div>
        <Image src="#" alt="" />
        <div>
          <h4>クイズで学ぶ</h4>
          <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
          <Button>カードで学ぶ</Button>
        </div>
      </div>
    </section>
  )
}

export default HowToUseGuide
