import { z } from 'zod'

export const quickQuoteSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  productName: z.string().min(1, 'Please select a product'),
  width: z.string().optional(),
  height: z.string().optional(),
  quantity: z.coerce.number().min(1).optional(),
  backingType: z.string().optional(),
  description: z.string().min(10, 'Please provide more detail').max(2000),
})
