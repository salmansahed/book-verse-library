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

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Login successful! Redirecting...");
      router.push("/");
    }
  };

  const handleGooleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <Form
      className="flex w-110 flex-col gap-4 shadow-xl shadow-black/20 rounded-3xl border p-6 space-y-3 bg-white"
      onSubmit={onSubmit}
    >
      <div>
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
      </div>

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
            "w-full bg-linear-to-r from-indigo-600 via-purple-600 to-pink-700"
          }
        >
          Login
        </Button>
      </div>
      <hr />
      <div className="flex items-center justify-center">
        <p>
          Dont&apos;t have an account?{" "}
          <Link
            href="/auth/registration"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <p className="text-xl font-semibold">Social Login</p>
        <Button
          onClick={handleGooleLogin}
          variant="secondary"
          className="text-black w-full shadow-sm shadow-black/20"
        >
          <FcGoogle />
          Login with Google
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
