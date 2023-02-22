import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>小记 - 三鱼</title>
        <meta
          name="description"
          content="保持好奇心和求知欲。"
        />
      </Head>
      <SimpleLayout
        title="保持好奇心和求知欲。"
        intro="这里会记录一些视频和文章灵感。"
      >
        <div className="space-y-20">
          <SpeakingSection title="视频">
            <Appearance
              href="https://www.youtube.com/watch?v=2SuvO4Gi7uY"
              title="波函数坍塌算法"
              description="将该算法放入数独中，随着游戏的进行时，进行每个单元格的结果坍缩计算，甚至可以构建一些符合逻辑连接的游戏场景 2D/3D尝试。"
              event="Youtube 2021"
              cta="观看视频"
            />
            <Appearance
              href="https://www.bilibili.com/video/BV1h3411G741"
              title="软件工程背后的思考"
              description="探讨了软件工程思想的发展以及《人月神话》中的一些例证，带出了如今软件工程中的几个基本模型。这是一个系列视频，从计算机最初的架构提出到如今浩瀚的发展进程。"
              event="Bilibili 2021"
              cta="观看视频"
            />
              <Appearance
                  href="https://www.bilibili.com/video/BV1JU4y1E73v"
                  title="正确认知 ReactHook"
                  description="把各种 Hook 划分成自变量和因变量，以及组件调用各层级路径中的路径变量，结构化的理解了 React 中的 Hook。"
                  event="Bilibili 2021"
                  cta="观看视频"
              />
          </SpeakingSection>
          <SpeakingSection title="文章">
            <Appearance
              href="https://github.com/justjavac/free-programming-books-zh_CN"
              title="免费的程序员编程类书籍"
              description="包含各种程序员从入门进阶的学习网站，资料"
              event="Github 2022"
              cta="入口"
            />
            <Appearance
              href="https://i.linuxtoy.org/docs/guide/index.html"
              title="开源世界旅行手册"
              description="技术旅行文档，包括一些基本教程，编程的实用方案以及开源运动史，你可以把这本书当成一个旅行。"
              event="Github 2009"
              cta="阅读"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
