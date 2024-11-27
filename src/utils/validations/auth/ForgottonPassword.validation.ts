import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "This field can't be empty")
    .email({ message: "Invalid email address" }),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;
