import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "This field can't be empty")
    .email({ message: "Invalid email address" }),
  password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message:
      "Password must be at least 8 characters: lowercase, uppercase, digit, and special character",
  }),
  confirmPassword: z.string(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
