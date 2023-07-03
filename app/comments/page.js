import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import Comments from "./comments"
import { Suspense } from "react"
import Photos from "./photos"

const getComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments', { cache: 'no-store' })
  return res.json()
}

const getPhotos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', { cache: 'no-store' })
  return res.json()
}

export default async function UsersPage() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('/')
  }

  const [comments, photos] = await Promise.all([getComments(), getPhotos()])

  return (
    <>
      <h1>Comments:</h1>
      <Suspense fallback={<h2>Loading comments...</h2>}>
        <Comments comments={comments} />
      </Suspense>

      <h1>Photos:</h1>
      <Suspense fallback={<h2>Loading photos...</h2>}>
        <Photos photos={photos} />
      </Suspense>
    </>
  )
}