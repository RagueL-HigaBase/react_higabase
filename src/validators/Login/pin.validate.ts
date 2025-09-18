import z from "zod";

export const pinValidate = z.object({
    hbPin: z.coerce.string()           // примет и число, и строку → к строке
        .trim()
        .regex(/^\d{4}$/, "PIN must be exactly 4 digits"),
});