import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const ProfileSchema = z
  .object({
    profileImage: z.string().url().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    password: z
      .string()
      .min(1, "Password field can't be empty")
      .regex(
        passwordRegex,
        "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number"
      ),
    confirmPassword: z.string().min(1, "Password field can't be empty"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "New password and confirm password do not match",
    path: ["confirmPassword"],
  });

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;
