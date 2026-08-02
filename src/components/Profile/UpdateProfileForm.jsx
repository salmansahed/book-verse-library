"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Card,
} from "@heroui/react";
import {
  FaCheck,
  FaArrowLeft,
  FaUser,
  FaImage,
  FaPenToSquare,
} from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import userAvatarPlaceholder from "../../assets/images/userAvatar.png";

const UpdateProfileForm = () => {
  const router = useRouter();
  const { data: session, isPending: isSessionLoading } =
    authClient.useSession();
  const user = session?.user;

  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Use session user image or state or fallback
  const previewImage = imageUrl.trim() || user?.image || userAvatarPlaceholder;

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    await authClient.updateUser(
      {
        name: userData.name,
        image: userData.image,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          router.push("/my-profile");
          router.refresh();
        },
        onError: () => {
          setIsLoading(false);
        },
      },
    );
  };

  if (isSessionLoading) {
    return (
      <Card className="bg-white/80 backdrop-blur-2xl border border-zinc-200/60 p-8 rounded-3xl shadow-xl text-center space-y-4">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-sm font-semibold text-zinc-500">
          Loading profile data...
        </p>
      </Card>
    );
  }

  return (
    <Card className="bg-white/90 backdrop-blur-2xl border border-zinc-200/80 rounded-3xl shadow-xl overflow-hidden relative">
      {/* Top Decorative Gradient Banner (Matching My Profile Page) */}
      <div className="h-28 bg-linear-to-r from-indigo-500 via-purple-500 to-fuchsia-500 relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_50%)]" />
      </div>

      <div className="px-6 sm:px-8 pb-8 -mt-12 relative z-10 space-y-6">
        {/* Live Avatar Preview Overlapping Banner */}
        <div className="flex flex-col items-center justify-center gap-1.5">
          <div className="relative p-1 rounded-full bg-white/50 backdrop-blur-md shadow-lg">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-white border-4 border-white shadow-sm">
              <Image
                src={previewImage}
                alt="Avatar Preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-zinc-400 mt-1">
            Live Preview
          </span>
        </div>

        {/* Header Title */}
        <div className="space-y-1 text-center">
          <h2 className="text-2xl font-black text-zinc-900 tracking-tight flex items-center justify-center gap-2">
            <FaPenToSquare className="text-indigo-600 text-lg" /> Edit Profile
          </h2>
          <p className="text-xs text-zinc-500 font-medium">
            Update your account information below
          </p>
        </div>

        {/* Form Inputs */}
        <Form className="space-y-4 pt-1" onSubmit={onSubmit}>
          {/* Name Field */}
          <TextField
            isRequired
            name="name"
            defaultValue={user?.name || ""}
            validate={(value) => {
              if (value.trim() === "") {
                return "Name is required";
              } else if (value.length < 2) {
                return "Name must be at least 2 characters";
              }
              return null;
            }}
            className="space-y-1.5"
          >
            <Label className="text-xs font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5">
              <FaUser className="text-indigo-500 text-xs" /> Full Name
            </Label>
            <Input
              placeholder="Enter your full name"
              className="w-full bg-zinc-50/80 border border-zinc-200/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-zinc-800 focus:bg-white focus:border-indigo-500 transition-all outline-hidden"
            />
            <FieldError className="text-xs text-rose-500 font-medium mt-1" />
          </TextField>

          {/* Profile Image URL Field */}
          <TextField
            isRequired
            name="image"
            defaultValue={user?.image || ""}
            validate={(value) => {
              const trimmedValue = value.trim();
              if (trimmedValue === "") {
                return "Image URL is required";
              }
              const urlPattern =
                /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
              if (!urlPattern.test(trimmedValue)) {
                return "Please enter a valid image URL (e.g. .jpg, .png, .webp)";
              }
              return null;
            }}
            className="space-y-1.5"
          >
            <Label className="text-xs font-bold uppercase tracking-wider text-zinc-600 flex items-center gap-1.5">
              <FaImage className="text-indigo-500 text-xs" /> Profile Image URL
            </Label>
            <Input
              type="url"
              placeholder="https://example.com/your-photo.jpg"
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full bg-zinc-50/80 border border-zinc-200/80 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-zinc-800 focus:bg-white focus:border-indigo-500 transition-all outline-hidden"
            />
            <FieldError className="text-xs text-rose-500 font-medium mt-1" />
          </TextField>

          {/* Action Buttons */}
          <div className="pt-3 flex items-center gap-3">
            <Link href="/my-profile" className="flex-1">
              <Button
                variant="outline"
                className="w-full h-11 rounded-xl font-bold text-sm bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200 transition-all gap-2"
              >
                <FaArrowLeft className="text-xs" /> Cancel
              </Button>
            </Link>

            <Button
              type="submit"
              variant="secondary"
              isDisabled={isLoading}
              className="flex-1 h-11 rounded-xl primary-btn"
            >
              {isLoading ? (
                <span>Saving...</span>
              ) : (
                <>
                  Save Changes <FaCheck className="text-xs" />
                </>
              )}
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default UpdateProfileForm;
