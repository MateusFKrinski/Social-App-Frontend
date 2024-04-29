import {z} from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email("Email inválido").min(10, "Email curto").max(70, "Email longo").transform(value => value.trim()),
    password: z.string().min(8, "Senha curta").max(40, "Senha longa").transform(value => value.trim())
})