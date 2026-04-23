"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const { error } = await authClient.signUp.email({ name, email, password });

        if (error) {
            setError(error.message ?? "Failed to create account");
            setLoading(false);
            return;
        }

        router.push("/admin");
        router.refresh();
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={handleSubmit}>
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">Create an account</h1>
                                <p className="text-balance text-muted-foreground">
                                    Enter your details to get started
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor="name">Name</FieldLabel>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    autoComplete="name"
                                />
                            </Field>
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
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="new-password"
                                />
                            </Field>
                            {error && (
                                <p className="text-sm text-destructive">{error}</p>
                            )}
                            <Field>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Creating account…" : "Sign up"}
                                </Button>
                            </Field>
                            <FieldDescription className="text-center">
                                Already have an account?{" "}
                                <Link href="/admin/login" className="underline underline-offset-4">
                                    Login
                                </Link>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className="relative hidden bg-muted md:block">
                        <Image
                            src="https://placehold.co/600x800"
                            alt=""
                            fill
                            className="object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline underline-offset-4">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
