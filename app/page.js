import { getServerSession } from "next-auth/next";
import LoginForm from "./components/loginForm";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/dashboard");
  }

  return (
    <main>
      <LoginForm />
    </main>
  );
}
