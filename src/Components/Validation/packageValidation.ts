import z from "zod";

export const packageSchema = z.object({
  weight: z
    .string()
    .trim()
    .min(1, "Weight is required")
    .refine((val) => !isNaN(Number(val)), "Weight must be a number")
    .refine((val) => Number(val) > 0, "Weight must be greater than 0"),
});
