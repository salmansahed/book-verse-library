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
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const RegistrationPage = () => {
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
      redirect("/login");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        className="flex w-110 flex-col gap-4 shadow-lg rounded-lg border p-6 space-y-3"
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
          <Input placeholder="John Doe" />
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
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        {/* Photo Field */}
        <TextField
          name="photo"
          type="url"
          validate={(value) => {
            if (!value || value.trim() === "") {
              return "Photo URL is required";
            }

            if (
              !/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\?[^\s]*)?$/i.test(
                value,
              )
            ) {
              return "Please enter a valid photo URL";
            }

            return null;
          }}
        >
          <Label>
            Photo Url <span className="text-red-500">*</span>
          </Label>
          <Input placeholder="https://example.com/photo.jpg" />
          <FieldError />
        </TextField>
        {/* Password Field */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
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
          <Input placeholder="Enter your password" />
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
            Create Account
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <p>Or</p>
        </div>
        <div className="flex items-center justify-center">
          <p>
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default RegistrationPage;
