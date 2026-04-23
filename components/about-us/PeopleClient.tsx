'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { r2 } from '@/lib/image'
import type { LocaleKey } from '@/data/practices'
import type { Attorney, Dept } from '@/types/attorney'

type Props = {
    departments: Dept[]
    attorneys: Attorney[]
    locale: LocaleKey
}

function initials(name: string) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('')
}

function deptName(d: Dept, locale: LocaleKey) {
    if (locale === 'th') return d.nameTh
    if (locale === 'cn') return d.nameCn
    return d.nameEn
}

export default function PeopleClient({ departments, attorneys, locale }: Props) {
    const [selected, setSelected] = useState<Set<string>>(new Set())

    function toggle(slug: string) {
        setSelected(prev => {
            const next = new Set(prev)
            if (next.has(slug)) next.delete(slug)
            else next.add(slug)
            return next
        })
    }

    const filtered = selected.size === 0
        ? attorneys
        : attorneys.filter(a => {
            const slugs = new Set(a.departments.map(d => d.department.slug))
            return [...selected].every(s => slugs.has(s))
        })

    return (
        <div className="flex flex-col gap-10">

            {/* Filter badges */}
            <div className="flex flex-row flex-nowrap md:flex-wrap gap-3 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0 scrollbar-none">
                <Badge
                    variant={selected.size === 0 ? 'default' : 'outline'}
                    className="px-5 py-2 text-sm shrink-0"
                    onClick={() => setSelected(new Set())}
                >
                    All
                </Badge>
                {departments.map(d => (
                    <Badge
                        key={d.slug}
                        variant={selected.has(d.slug) ? 'default' : 'outline'}
                        className="px-5 py-2 text-sm shrink-0"
                        onClick={() => toggle(d.slug)}
                    >
                        {deptName(d, locale)}
                    </Badge>
                ))}
            </div>

            {/* Attorney grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map(a => {
                    const displayName = locale === 'th' ? a.fullNameTh : locale === 'cn' ? a.fullNameCn : a.fullNameEn
                    const displayTitle = locale === 'th' ? a.titleTh : locale === 'cn' ? a.titleCn : a.titleEn
                    const displayBio = locale === 'th' ? a.biographyTh : locale === 'cn' ? a.biographyCn : a.biographyEn

                    return (
                        <Link
                            key={a.id}
                            href={`/about/people/${a.slug}`}
                            className="group flex flex-col rounded-xl bg-forest border border-gold/10 hover:border-gold/30 transition-colors overflow-hidden"
                        >
                            {/* Photo — 4:5 */}
                            <AspectRatio ratio={4 / 5}>
                                {a.imageUrl ? (
                                    <Image
                                        src={r2(a.imageUrl)}
                                        alt={a.fullNameEn}
                                        fill
                                        className="object-cover object-top"
                                    />
                                ) : (
                                    <div className="size-full bg-forest-mid flex items-center justify-center">
                                        <span className="font-heading text-5xl text-gold/30">
                                            {initials(a.fullNameEn)}
                                        </span>
                                    </div>
                                )}
                            </AspectRatio>

                            {/* Info */}
                            <div className="flex flex-col gap-3 p-5">
                                <div>
                                    <p className="font-semibold text-text-primary text-base leading-snug group-hover:text-gold transition-colors">
                                        {displayName}
                                    </p>
                                    <p className="text-xs text-gold mt-1">{displayTitle}</p>
                                </div>

                                <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                                    {displayBio}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>

            {filtered.length === 0 && (
                <p className="text-sm text-text-secondary/50 text-center py-12">
                    No attorneys match all selected filters.
                </p>
            )}
        </div>
    )
}
