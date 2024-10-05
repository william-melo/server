import z from "zod";

/*
const addressSchema = z.object({
  address: z.string().min(1, 'The street is required'),
  neighborhood: z.string().min(1, 'The neighborhood is required'),
  city: z.string().min(1, 'The city is required')
})

const emergencyContactSchema = z.object({
  name: z.string().min(1, 'Contact name is required'),
  relationship: z.string().min(1, 'Relationship is required'),
  contactNumber: z.string().min(1, 'Contact number is required')
})

const attendanceSchema = z.object({
  date: z.date(),
  status: z.enum(['Present', 'Absent', 'Excused'])
})

const studentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  dateOfBirth: z.date(),
  gender: z.enum(['Male', 'Female']),
  contactNumber: z.string().regex(/^\d{10}$/, 'Contact number must be exactly 10 digits'),
  email: z.string().email('Invalid email address'),
  address: addressSchema,
  studentId: z.string().min(1, 'Student ID is required'),
  enrollmentDate: z.date().default(() => new Date()),
  course: z.array(z.enum(['Piano', 'Classic Guitar', 'Drums', 'Electric Guitar', 'Singing'])),
  instrument: z.string().min(1, 'Instrument is required'),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  teacher: z.string().optional(), // Assuming teacher references are strings, adjust accordingly
  attendance: z.array(attendanceSchema).optional(),
  emergencyContact: emergencyContactSchema,
  notes: z.string().optional()
})
*/

const clientSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  contactNumber: z.string(),
  email: z.string().email("Invalid email address"),
  contactDate: z.date().transform((str) => new Date(str)),
  companyIndustry: z.string(),
  dailyVisits: z.string(),
  modeOfVisits: z.string(),
  plan: z.string(),
});

export function validateClient(object) {
  return clientSchema.safeParse(object);
}

export function validatePartialClient(object) {
  return clientSchema.partial().safeParse(object);
}
