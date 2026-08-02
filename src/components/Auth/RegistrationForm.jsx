"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  InputGroup,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const RegistrationForm = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photo,
    });
    if (error) {
      toast.error(error.message);
    } else {
      router.push("/auth/login");
    }
  };

  const handleGooleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Form
      className="flex w-120 flex-col gap-4 shadow-xl shadow-black/20 rounded-3xl border p-6 space-y-3 bg-white"
      onSubmit={onSubmit}
    >
      <div>
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
      </div>
      {/* Name Field */}
      <TextField
        isRequired
        name="name"
        type="text"
        validate={(value) => {
          if (value.length < 2) {
            return "Name must be at least 2 characters";
          }
          return null;
        }}
      >
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      {/* Email Field */}
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email address" />
        <FieldError />
      </TextField>
      {/* Photo Field */}

      <TextField
        isRequired
        name="photo"
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
        <Label>Photo Url</Label>
        <Input
          type="url"
          placeholder="https://example.com/your-photo.jpg"
          className="focus:ring-2 focus:ring-indigo-500"
        />
        <FieldError />
      </TextField>
      {/* Password Field */}
      <TextField
        className="w-full"
        name="password"
        isRequired
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <InputGroup>
          <InputGroup.Input
            name="password"
            className="w-full"
            type={isVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputGroup.Suffix className="pr-0">
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </Button>
          </InputGroup.Suffix>
        </InputGroup>

        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>

        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button
          type="submit"
          className={
            "w-full primary-btn"
          }
        >
          Create Account
        </Button>
      </div>
      <hr />
      <div className="flex items-center justify-center">
        <p>
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-xl font-semibold">Social Login</p>
        <Button
          onClick={handleGooleLogin}
          variant="secondary"
          className="text-black w-full shadow shadow-black/20"
        >
          <FcGoogle />
          Login with Google
        </Button>
      </div>
    </Form>
  );
};

export default RegistrationForm;
