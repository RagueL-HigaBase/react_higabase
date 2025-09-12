import z from "zod";

export const validateResend = z.object({
    hbEmail: z.email("validate.auth.email"),
})