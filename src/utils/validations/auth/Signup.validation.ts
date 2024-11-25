import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const SignupSchema = z
  .object({
    username: z.string().min(1, { message: "username required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().regex(passwordRegex, {
      message:
        "Password must be at least 8 characters: lowercase, uppercase, digit, and special character",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export type SignupSchemaType = z.infer<typeof SignupSchema>;
