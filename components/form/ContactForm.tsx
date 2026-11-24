'use client'

import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import { z } from 'zod'
import { useTranslations, useLocale } from 'next-intl'
import { Turnstile, useTurnstile } from 'react-turnstile'
import { Field, FieldLabel, FieldError, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Select, SelectTrigger, SelectValue,
    SelectContent, SelectItem,
} from '@/components/ui/select'
import { DEPARTMENTS } from '@/data/departments'
import type { LocaleKey } from '@/data/practices'

const schema = z.object({
    name:         z.string().min(1, 'Name is required'),
    company:      z.string().optional(),
    email:        z.email('Invalid email address'),
    practiceArea: z.string().min(1, 'Please select a practice area'),
    message:      z.string().min(10, 'Message must be at least 10 characters'),
})

type FormData = z.infer<typeof schema>

const inputCls = 'h-12 rounded-sm bg-paper border-rule-strong text-base text-ink placeholder:text-[#6b776a] focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-gold/55'
const selectTriggerCls = 'w-full data-[size=default]:h-12 rounded-sm bg-paper border-rule-strong text-base text-ink focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-gold/55 data-[placeholder]:text-[#6b776a]'
const labelCls = 'text-[0.9375rem] font-medium text-ink'

function ContactForm() {
    const t = useTranslations('ContactForm')
    const rawLocale = useLocale()
    const locale = (rawLocale as LocaleKey) in { en: 1, th: 1, cn: 1 } ? rawLocale as LocaleKey : 'en'
    const practiceAreas = DEPARTMENTS[locale]

    const [cfToken, setCfToken] = useState<string | null>(null)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const turnstile = useTurnstile()

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = async (data: FormData) => {
        if (!cfToken) return

        const parsed = schema.safeParse(data)
        if (!parsed.success) return

        setStatus('loading')
        try {
            const res = await fetch('/api/form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...parsed.data, cfToken }),
            })
            if (!res.ok) throw new Error()
            setStatus('success')
            reset()
            setCfToken(null)
        } catch {
            setStatus('error')
            turnstile.reset()
        }
    }

    return (
        <div className="flex flex-col gap-6">
            <h3 className="text-[1.375rem]">{t('title')}</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup className="gap-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field data-invalid={!!errors.name}>
                            <FieldLabel className={labelCls}>{t('name')}</FieldLabel>
                            <Input {...register('name')} placeholder={t('namePlaceholder')} className={inputCls} />
                            <FieldError errors={[errors.name]} />
                        </Field>
                        <Field>
                            <FieldLabel className={labelCls}>{t('company')}</FieldLabel>
                            <Input {...register('company')} placeholder={t('companyPlaceholder')} className={inputCls} />
                        </Field>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Field data-invalid={!!errors.email}>
                            <FieldLabel className={labelCls}>{t('email')}</FieldLabel>
                            <Input {...register('email')} type="email" placeholder={t('emailPlaceholder')} className={inputCls} />
                            <FieldError errors={[errors.email]} />
                        </Field>
                        <Field data-invalid={!!errors.practiceArea}>
                            <FieldLabel className={labelCls}>{t('practiceArea')}</FieldLabel>
                            <Controller
                                name="practiceArea"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className={selectTriggerCls}>
                                            <SelectValue placeholder={t('practiceAreaPlaceholder')} />
                                        </SelectTrigger>
                                        <SelectContent className="bg-paper border-rule">
                                            {practiceAreas.map(a => (
                                                <SelectItem key={a} value={a}>{a}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            <FieldError errors={[errors.practiceArea]} />
                        </Field>
                    </div>

                    {/* Row 3 */}
                    <Field data-invalid={!!errors.message}>
                        <FieldLabel className={labelCls}>{t('message')}</FieldLabel>
                        <textarea
                            {...register('message')}
                            rows={4}
                            placeholder={t('messagePlaceholder')}
                            className="min-h-34 w-full resize-y rounded-sm border border-rule-strong bg-paper px-3.5 py-3 text-base text-ink placeholder:text-[#6b776a] outline-none transition-[border-color,box-shadow] duration-150 focus-visible:border-brand focus-visible:ring-3 focus-visible:ring-gold/55 aria-invalid:border-destructive"
                            aria-invalid={!!errors.message}
                        />
                        <FieldError errors={[errors.message]} />
                    </Field>

                    {/* Turnstile */}
                    <div>
                        <Turnstile
                            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'}
                            onVerify={setCfToken}
                            onExpire={() => setCfToken(null)}
                            theme="light"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={status === 'loading' || !cfToken}
                        className="h-12 w-full cursor-pointer rounded-sm px-6.5 text-base font-medium sm:w-fit"
                    >
                        {status === 'loading' ? t('submitting') : t('submit')}
                    </Button>

                    {status === 'success' && (
                        <p role="status" className="text-[0.9375rem] text-emerald">{t('success')}</p>
                    )}
                    {status === 'error' && (
                        <p role="alert" className="text-[0.9375rem] text-destructive">{t('error')}</p>
                    )}
                </FieldGroup>
            </form>
        </div>
    )
}

export default ContactForm
