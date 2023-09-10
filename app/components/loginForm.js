'use client'

import { signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const router = useRouter()

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [loggingIn, setLoggingIn] = useState(false)

  useEffect(() => {
    const subscription = watch(value => {})
    return () => subscription.unsubscribe()
  }, [watch])

  const onSubmit = async data => {
    setLoggingIn(true)
    const res = await signIn('credentials', { ...data, redirect: false })
    
    if (res.error) {
      setLoggingIn(false)
    }

    if (res.error == null) {
      router.push('/dashboard')
    } 
  }


  if (loggingIn) {
    return <h1>Logging in...</h1>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required"
          })} 
        />
      </div>
      <p style={{color: 'red'}}>{errors?.username?.message}</p>

      <div>
        <label htmlFor="pass">Password:</label>
        <input
          type="password"
          id="pass"
          {...register("password", {
            required: "Password is required"
          })}
        />
      </div>
      <p style={{color: 'red'}}>{errors?.password?.message}</p>

      <input type="submit" value="Login" />
    </form>
  )
}