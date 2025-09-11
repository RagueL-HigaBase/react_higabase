import { z } from "zod";

export const validateLogin = z.object({
    hbEmail: z.email("validate.auth.email"),
    hbPassword: z
        .string()
        .trim()
        .min(8,"validate.auth.password_not_shorter")
        .max(32, "validate.auth.password_not_longer")
})