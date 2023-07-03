'use client'

import { signIn } from "next-auth/react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export default function LoginForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = async data => {
    const res = await signIn('credentials', {
      ...data,
    })
  }

  // useEffect(() => {
  //   const subscription = watch(value => {})
  //   return () => subscription.unsubscribe()
  // }, [watch])

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