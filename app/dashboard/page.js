import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { redirect } from "next/navigation"
import ClientDashboard from "./ClientDashboard"

export default async function Dashboard() {
  const session = await getServerSession(options)
  console.log(session)
  if (!session) {
    redirect('/')
  }

  return (
    <>
      <ClientDashboard session={session.user} />
    </>
  )
}