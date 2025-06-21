"use client";

import SignupForm from "@/components/SignupForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <SignupForm />
        <p className="text-center text-sm text-gray-600 mt-4">
           déjà inscrit ?{" "}
           <Link href="/login" className="text-blue-600 hover:underline">
           se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
