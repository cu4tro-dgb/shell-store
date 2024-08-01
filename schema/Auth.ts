import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    username: z.string(),
    firstname: z.string().optional(),
    lastname: z.string().optional(),
    checkPassword: z.string()
  })
  .refine((data) => data.password === data.checkPassword, {
    message: "Passwords don't match",
    path: ['checkPassword'] // path of error
  })

export type RegisterSchema = z.output<typeof registerSchema>

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
})

export type LoginSchema = z.output<typeof loginSchema>
