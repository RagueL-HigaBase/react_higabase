import { z } from "zod";


export const validateRegister = z.object({
    hbEmail: z.email("validate.auth.email"),
    hbPassword: z
        .string()
        .trim()
        .min(8,"validate.auth.password_not_shorter")
        .max(32, "validate.auth.password_not_longer"),
    hbConfirm: z
        .string()
        .trim()
        .min(8, "validate.auth.password_not_shorter")
        .max(32, "validate.auth.password_not_longer"),
    }).refine((v) => v.hbPassword === v.hbConfirm, {
    path: ["hbConfirm"],
    message: "validate.auth.not_match",
});

export type ValidateRegister = z.infer<typeof validateRegister>