import { z } from 'zod'

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(2, 'Please enter a subject').max(200),
  message: z.string().min(20, 'Message must be at least 20 characters').max(5000),
})
