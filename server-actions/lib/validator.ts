import * as z from "zod";

export const createUserSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3, "Password must be at least 3 characters long"),
    confirmPassword: z
      .string()
      .min(3, "Password must be at least 3 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
