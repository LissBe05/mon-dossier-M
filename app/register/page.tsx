// app/register/page.tsx
"use client";

import SignupForm from "@/components/SignupForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>
        <SignupForm />
      </div>
    </div>
  );
}
