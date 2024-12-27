"use client";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import Link from "next/link";
import { SignInForm } from "../components/auth/sign-in-form";
import { SocialAuth } from "../components/auth/social-auth";

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Sign in to your account to continue
          </p>
        </div>

        <Card className="p-6">
          <SignInForm />
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <SocialAuth />

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </Card>
      </div>
    </main>
  );
}