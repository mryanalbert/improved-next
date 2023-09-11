"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ClientDashboard({ session: { name, email, image } }) {
  const router = useRouter();
  return (
    <>
      <Link href="/comments">Comments</Link>
      <h1>Dashboard</h1>
      <h2>{name}</h2>
      <h2>{email}</h2>

      <button
        onClick={() =>
          signOut({ redirect: false }).then(() => router.push("/"))
        }
      >
        Logout
      </button>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
