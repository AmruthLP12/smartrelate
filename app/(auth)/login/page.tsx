"use client";

import { AuthForm } from "@/components/auth-form";
import Link from "next/link";
import { loginSchema } from "@/lib/validation/auth";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();

  const handleLogin = async (data: LoginFormData) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.message === "Login successful") {
        toast({
          title: "Success",
          description: "Login successful",
        });
        router.push("/dashboard");
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
            Log in to your account
          </h2>
        </div>
        <AuthForm type="login" onSubmit={handleLogin} />
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
