'use client'

import { signOut } from "next-auth/react"
import Link from "next/link"

export default function ClientDashboard({ session: { name, email, image } }) {
  return (
    <>
      <Link href="/comments">Comments</Link>
      <h1>Dashboard</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>
      
      <button onClick={signOut}>Logout</button>
    </>
  )
}