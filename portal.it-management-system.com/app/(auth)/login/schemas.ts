import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(1, "password is required."),
});

export type LoginFormData = z.infer<typeof loginSchema>;
