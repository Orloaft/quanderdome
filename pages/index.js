import LoginPage from "./LoginPage";
import { useSession } from "next-auth/react";
import Dashboard from "./Dashboard";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <Dashboard user={session.user.email} />;
  }

  return <LoginPage />;
}
