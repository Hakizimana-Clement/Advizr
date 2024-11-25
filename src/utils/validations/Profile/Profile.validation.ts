import { z } from "zod";

export const ProfileSchema = z.object({
  profileImage: z.string().url().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
});

export type ProfileSchemaType = z.infer<typeof ProfileSchema>;
