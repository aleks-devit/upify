export const email = {
  required: { value: true, message: 'Email is required' },
  pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'This not email' },
  maxLength: { value: 50, message: 'Max 50 symbols' }
}

export const password = {
  minLength: { value: 3, message: 'Minimum 3 symbols' },
  required: { value: true, message: 'Password is required' },
  maxLength: { value: 2500, message: 'Max 50 symbols' }
}
