'use client'

import { SessionProvider } from 'next-auth/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'

export default function AuthProvider({ children }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
  }, [])
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}