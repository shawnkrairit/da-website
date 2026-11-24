import type { ReactNode } from 'react'
import SectionHeader from './SectionHeader'

type Props = {
    id?: string
    title: ReactNode
    description?: ReactNode
    tone?: 'paper' | 'dark'
    children: ReactNode
}

/** Heading in the left margin (sticky on desktop), content on the right. */
function Section({ id, title, description, tone = 'paper', children }: Props) {
    return (
        <section
            id={id}
            className={
                tone === 'dark'
                    ? 'on-dark bg-brand text-white py-[clamp(72px,9vw,128px)]'
                    : 'border-t border-rule py-[clamp(72px,9vw,128px)]'
            }
        >
            <div className="wrap grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-28">
                        <SectionHeader title={title} description={description} />
                    </div>
                </div>
                <div className="lg:col-span-7 lg:col-start-6">{children}</div>
            </div>
        </section>
    )
}

export default Section
