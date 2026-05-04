export const metadata = {
  title: "Update Profile | BookVerse",
  description:
    "Keep your account up to date by modifying your profile information, including your name and profile picture URL. Save your changes to personalize your experience on BookVerse.",
};

import SessionWatcher from "@/components/Profile/SessionWatcher";
import UpdateProfileForm from "@/components/Profile/UpdateProfileForm";

const UpdateProfilePage = () => {
  return (
    <div className="flex items-center justify-center h-[80vh] sm:h-screen px-3 bg-gray-100">
      <SessionWatcher />
      <UpdateProfileForm />
    </div>
  );
};

export default UpdateProfilePage;
