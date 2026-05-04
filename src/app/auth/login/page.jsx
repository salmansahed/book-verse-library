export const metadata = {
  title: "Login | BookVerse",
  description:
    "Log in to your BookVerse account to unlock digital borrowing. Securely sign in to manage your library and profile.",
};

import LoginForm from "@/components/Auth/LoginForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (user) {
    redirect("/my-profile");
  }

  return (
    <div className="flex items-center justify-center h-[80vh] sm:min-h-screen px-2 bg-gray-100 py-10">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
