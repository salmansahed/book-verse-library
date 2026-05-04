export const metadata = {
  title: "Register | BookVerse",
  description:
    "Join the BookVerse community today! Create a new account to start your digital library journey, borrow your favorite books, and manage your personal profile.",
};

import RegistrationForm from "@/components/Auth/RegistrationForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const RegistrationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (user) {
    redirect("/my-profile");
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-2 bg-gray-100">
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
