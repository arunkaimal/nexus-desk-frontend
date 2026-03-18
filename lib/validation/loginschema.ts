import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6, "Password must be minimum 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
