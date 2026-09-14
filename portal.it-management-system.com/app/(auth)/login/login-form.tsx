"use client";

import { useAuthStore } from "@/store/auth.store";
import { LoginFormData, loginSchema } from "./schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const success = await login(data.email, data.password);
    console.log({ success });
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <Card className='w-full max-w-md shadow-lg'>
      <CardHeader className='space-y-1'>
        <CardTitle className='text-2xl font-semibold'>Welcome back</CardTitle>

        <CardDescription>
          Sign in to your IT Management System account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
          {/* Email */}
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>

            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              autoComplete='email'
              disabled={isLoading}
              {...register("email")}
            />

            {errors.email && (
              <p className='text-sm text-destructive'>{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>

            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              autoComplete='current-password'
              disabled={isLoading}
              {...register("password")}
            />

            {errors.password && (
              <p className='text-sm text-destructive'>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Authentication Error */}
          {error && (
            <div
              role='alert'
              className='rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive'
            >
              {error}
            </div>
          )}

          {/* Submit */}
          <Button type='submit' className='w-full' disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
