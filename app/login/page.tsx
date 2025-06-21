"use client";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>
        <LoginForm />
        <p className="text-center text-sm text-gray-600 mt-4">
           Pas encore inscrit ?{" "}
           <Link href="/register" className="text-blue-600 hover:underline">
           Créer un compte
          </Link>
        </p>

      </div>
    </div>
  );
}
