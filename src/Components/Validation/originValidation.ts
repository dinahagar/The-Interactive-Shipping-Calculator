import z from "zod";

export const originSchema = z.object({
  countryCode: z
    .string()
    .trim()
    .min(1, "Country Code is required")
    .refine((val) => !isNaN(Number(val)), "Country Code must be a number")
    .refine((val) => Number(val) > 0, "Country Code must be greater than 0"),
});
