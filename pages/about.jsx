import Head from 'next/head'
import Container from '../components/Layout/Container'
import Layout from '../components/Layout/Layout'
import { BLOG_NAME } from '../lib/constants'
import PageHeading from '../components/PageHeading'

export default function About() {
  return (
    <Layout isFooter={true} className='pt-10'>
      <Head>
        <title>About | {BLOG_NAME}</title>
      </Head>
      <Container>
        <PageHeading>Nice to meet you.</PageHeading>
        <section className="max-w-3xl mx-auto py-8 md:py-16 lg:py-24 ">
          <p className="text-slate-900 dark:text-white font-light font-['inter']">
            信只是普通的纸，纵使烧了，留在心中的东西依然会留下，不能留下的留了也没用
            <br />
            总有一天，我们每个人都会那样子死去的，包括你和我。
            <br />
            没有人喜欢孤独，只是不愿失望。
            <br />
            在那样震撼的暮色中，我突然想起初美，然后领悟到她当时带给我的震撼到底是什么，那是一种无法满足的，而且今后也不可能满足的少年时代的憧憬。很久以前，我把那样纯洁无垢的憧憬抛弃在什么地方，我甚至想不起他曾存在于我心间。
            <br />
            我得花上一段时间才能如此这般回忆起直子的脸，随着时间的消逝，时间花的越来越长，尽管很叫人感到悲哀，但却是千真万确，最初只需要五秒就能想起来的，渐渐地变成十秒、三十秒、一分钟，就像黄昏时的黑影，越拉越长，最后大概会是给黑暗吞噬罢了。
            <br />
            “无论看多少次，都是重复同一件事而已。”
            <br />
            “有什么办法，我们还不是一直重复在做同一件事。”
          </p>

        </section>
      </Container>
    </Layout>
  )
}
