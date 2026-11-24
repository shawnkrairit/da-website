import type { ReactNode } from 'react'

type Props = {
    /** Kept for existing call sites; small labels above headings are no longer rendered. */
    eyebrow?: string
    title: ReactNode
    description?: ReactNode
    as?: 'h1' | 'h2'
}

function SectionHeader({ title, description, as: Heading = 'h2' }: Props) {
    return (
        <div className="flex flex-col gap-5">
            <Heading
                className={
                    Heading === 'h1'
                        ? 'text-[clamp(2.5rem,1.1rem+5.4vw,5.25rem)]'
                        : 'text-[clamp(1.875rem,1.35rem+1.9vw,3rem)]'
                }
            >
                {title}
            </Heading>

            {description && (
                <p className="max-w-[46ch] text-ink-soft [.on-dark_&]:text-on-dark-soft">
                    {description}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
