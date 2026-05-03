'use client'

interface FormStatusProps {
  type: 'success' | 'error'
  message: string
  className?: string
}

export function FormStatus({ type, message, className = '' }: FormStatusProps) {
  return (
    <div
      role="status"
      className={`rounded-xl border px-4 py-3 text-sm ${
        type === 'success'
          ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
          : 'border-red-200 bg-red-50 text-red-900'
      } ${className}`}
    >
      {message}
    </div>
  )
}
