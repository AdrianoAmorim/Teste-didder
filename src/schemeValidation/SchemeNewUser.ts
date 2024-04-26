import { z } from 'zod'

export const newUserScheme = z.object({
    email: z.string({ required_error: 'O email é obrigatório' }).min(1, 'O email é obrigatório').email('Formato de email inválido!'),
    phone: z.string({ required_error: 'Telefone é obrigatória' }).min(1, 'O Telefone é obrigatório')
})