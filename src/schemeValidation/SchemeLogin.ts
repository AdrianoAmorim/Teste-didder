import { z } from 'zod'

export const loginScheme = z.object({
    email: z.string({ required_error: 'O email é obrigatório' }).min(1, 'O email é obrigatório').email('Formato de email inválido!'),
    password: z.string({ required_error: 'A senha é obrigatória' }).min(1, 'A senha é obrigatória')
})