import { z } from "zod";


export const validateRegister = z.object({
    hbEmail: z.email("auth.vd_email"),
    hbPassword: z
        .string()
        .trim()
        .min(8,"auth.vd_password")
        .max(32, "auth.vd_confirm"),
    hbConfirmPassword: z
        .string()
        .trim()
        .min(8, "auth.vd_password")
        .max(32, "auth.vd_confirm"),
    }).refine((v) => v.hbPassword === v.hbConfirmPassword, {
    path: ["hbConfirmPassword"],
    message: "auth.vd_not_match",
});

export type ValidateRegister = z.infer<typeof validateRegister>