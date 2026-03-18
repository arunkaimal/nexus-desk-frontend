"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { loginSchema, LoginFormData } from "@/lib/validation/loginschema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login Data:", data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md border border-purple-700/40 bg-black">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">
            <span className="text-purple-500">Nexus</span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className="space-y-2">
              <Label className="text-gray-800">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-gray-700 focus-visible:ring-purple-500 p-6 text-gray-100"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label className="text-gray-800">Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="border-gray-700 focus-visible:ring-purple-500 p-6 text-gray-100"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login button */}
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 py-6 cursor-pointer"
              type="submit"
            >
              Login
            </Button>
            {/* Forgot password */}
            <div className="flex justify-center text-sm">
              <span className="text-purple-400 hover:text-purple-300 cursor-pointer">
                Forgot password?
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
