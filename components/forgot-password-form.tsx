"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm({ className, ...props }: React.ComponentProps<"div">) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await authClient.requestPasswordReset({
            email,
            redirectTo: "/admin/reset-password",
        });

        if (error) {
            setError(error.message ?? "Something went wrong");
            setLoading(false);
            return;
        }

        setSent(true);
        setLoading(false);
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Forgot password</h1>
                                <p className="text-balance text-muted-foreground">
                                    Enter your email and we&apos;ll send you a reset link
                                </p>
                            </div>
                            {sent ? (
                                <p className="text-center text-sm text-muted-foreground">
                                    Check your inbox for a reset link.
                                </p>
                            ) : (
                                <>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="admin@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoComplete="email"
                                        />
                                    </Field>
                                    {error && (
                                        <p className="text-sm text-destructive">{error}</p>
                                    )}
                                    <Field>
                                        <Button type="submit" disabled={loading}>
                                            {loading ? "Sending…" : "Send reset link"}
                                        </Button>
                                    </Field>
                                </>
                            )}
                            <FieldDescription className="text-center">
                                Remember your password?{" "}
                                <a href="/admin/login" className="underline underline-offset-4">
                                    Back to login
                                </a>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className="relative hidden bg-muted md:block">
                        <img
                            src="https://placehold.co/600x800"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
