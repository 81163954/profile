import Head from 'next/head'

import {Card} from '@/components/Card'
import {Section} from '@/components/Section'
import {SimpleLayout} from '@/components/SimpleLayout'

function ToolsSection({children, ...props}) {
    return (
        <Section {...props}>
            <ul role="list" className="space-y-16">
                {children}
            </ul>
        </Section>
    )
}

function Tool({title, href, children}) {
    return (
        <Card as="li">
            <Card.Title as="h3" href={href}>
                {title}
            </Card.Title>
            <Card.Description>{children}</Card.Description>
        </Card>
    )
}

export default function Uses() {
    return (
        <>
            <Head>
                <title>Uses - zhouyu</title>
                <meta
                    name="description"
                    content="我使用的软件，小工具推荐。"
                />
            </Head>
            <SimpleLayout
                title="我使用的软件，小工具推荐。"
                intro="提高生产力，美化界面，以及一些工具扩展相关"
            >
                <div className="space-y-20">
                    <ToolsSection title="开发工具">
                        <Tool title="Tabby">
                            一个命令行终端工具，界面和动画效果都非常精美。使用起来非常丝滑，提供了串口，端口转发等易用的功能
                        </Tool>
                        <Tool title="Listen1">
                            整合了非常多平台的一站式听歌平台
                        </Tool>
                    </ToolsSection>
                    <ToolsSection title="网站">
                        <Tool title="Vercel">
                            链接github，提供了一套简洁但完整的 CI/CD 工作流，个人开发推荐使用
                        </Tool>
                        <Tool title="GitBook">
                            能够快速构建工具的技术参考文档
                        </Tool>
                    </ToolsSection>
                </div>
            </SimpleLayout>
        </>
    )
}
