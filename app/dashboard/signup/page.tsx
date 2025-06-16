'use client'

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const params = useSearchParams();
  const role = params.get("role"); // "medecin" ou "patient"
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Compte créé avec succès !");
      // Rediriger vers le dashboard approprié
      router.push(role === "medecin" ? "/app/dashboard-medecin" : "/app/dashboard-patient");
    } catch (err: any) {
      console.error(err);
      setError("Erreur lors de la création du compte");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold mb-4">
          Création de compte {role === "medecin" ? "Médecin" : "Patient"}
        </h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Créer le compte
          </button>
        </form>

        <p className="mt-4 text-sm">
          Vous avez déjà un compte ?{" "}
          <Link href={`/login?role=${role}`} className="text-blue-600 underline hover:text-blue-800">
            Se connecter
          </Link>
        </p>
      </div>
    </main>
  );
}
