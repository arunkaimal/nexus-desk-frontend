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
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
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
            <motion.form
              className="space-y-5"
              onSubmit={handleSubmit(onSubmit)}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.6,
                  },
                },
              }}
            >
              {/* Email */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="space-y-2"
              >
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
              </motion.div>

              {/* Password */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="space-y-2"
              >
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
              </motion.div>

              {/* Login button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 py-6 cursor-pointer"
                    type="submit"
                  >
                    Login
                  </Button>
                </motion.div>
              </motion.div>
              {/* Forgot password */}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                className="flex justify-center text-sm"
              >
                <span className="text-purple-400 hover:text-purple-300 cursor-pointer">
                  Forgot password?
                </span>
              </motion.div>
            </motion.form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
