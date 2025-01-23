"use client";

import { AuthForm } from "@/components/auth-form";
import Link from "next/link";
import { registerSchema } from "@/lib/validation/auth";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleRegister = async (data: RegisterFormData) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.message === "User created successfully") {
        toast({
          title: "Success",
          description: "User created successfully",
        });
        router.push("/login");
      }

      if (!response.ok) {
        return toast({
          title: "Error",
          description: result.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            Create a new account
          </h2>
        </div>
        <AuthForm type="register" onSubmit={handleRegister} />
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
