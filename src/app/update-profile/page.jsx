"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdCheckCircleOutline } from "react-icons/md";

const UpdateProfilePage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    await authClient.updateUser(
      {
        image: userData.image,
        name: userData.name,
      },
      {
        onSuccess: () => {
          router.push("/my-profile");
        },
      },
    );
  };

  return (
    <div className="flex items-center justify-center h-screen px-3">
      <Form
        className="flex w-96 flex-col gap-4 shadow border rounded-md p-6 space-y-3"
        onSubmit={onSubmit}
      >
        <h2 className="text-2xl font-bold text-center">Update Your Profile</h2>
        {/* Name */}
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.trim() === "") {
              return "Name is required";
            } else if (value.length < 2) {
              return "Name must be at least 2 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>

        {/* Image Url */}
        <TextField
          isRequired
          name="image"
          validate={(value) => {
            const trimmedValue = value.trim();

            if (trimmedValue === "") {
              return "Image URL is required";
            }

            const urlPattern =
              /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
            if (!urlPattern.test(trimmedValue)) {
              return "Please enter a valid image URL (jpg, png, webp, etc.)";
            }

            return null;
          }}
        >
          <Label className="font-medium text-zinc-700">Profile Image URL</Label>
          <Input
            type="url"
            placeholder="https://example.com/your-photo.jpg"
            className="focus:ring-2 focus:ring-indigo-500"
          />
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button
            type="submit"
            className={
              "w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
            }
          >
            Save Changes <MdCheckCircleOutline />
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UpdateProfilePage;
