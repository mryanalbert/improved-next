import { getServerSession } from "next-auth"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import Comments from "./comments"
import Photos from "./photos"

const getComments = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json()
}

const getPhotos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
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
      {/* <h1>Comments:</h1>
      <Comments comments={comments} /> */}

      <h1>Photos:</h1>
      <Photos photos={photos} />
    </>
  )
}