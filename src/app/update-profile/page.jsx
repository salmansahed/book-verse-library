export const metadata = {
  title: "Update Profile | BookVerse",
  description:
    "Keep your account up to date by modifying your profile information, including your name and profile picture URL. Save your changes to personalize your experience on BookVerse.",
};

import SessionWatcher from "@/components/Profile/SessionWatcher";
import UpdateProfileForm from "@/components/Profile/UpdateProfileForm";

const UpdateProfilePage = () => {
  return (
    <div className="min-h-[80vh] sm:min-h-screen bg-zinc-50/50 py-12 md:py-16 px-4 sm:px-6 flex items-center justify-center">
      <SessionWatcher />
      <div className="w-full max-w-md">
        <UpdateProfileForm />
      </div>
    </div>
  );
};

export default UpdateProfilePage;
