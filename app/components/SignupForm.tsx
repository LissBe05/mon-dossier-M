// components/SignupForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
  role: "patient" | "medecin";
}

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await setDoc(doc(db, "users", userCred.user.uid), {
        email: data.email,
        role: data.role,
        createdAt: new Date(),
      });

      // Rediriger selon le rôle
      if (data.role === "patient") {
        router.push("/patients/dashboard");
      } else {
        router.push("/medecins/dashboard");
      }
    } catch (err: any) {
      console.error(err);
      setError("Erreur d'inscription. Vérifie tes infos.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email requis" })}
        className="w-full border p-2 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <input
        type="password"
        placeholder="Mot de passe"
        {...register("password", { required: "Mot de passe requis" })}
        className="w-full border p-2 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}

      <select {...register("role", { required: "Rôle requis" })} className="w-full border p-2 rounded">
        <option value="">-- Sélectionner un rôle --</option>
        <option value="patient">Patient</option>
        <option value="medecin">Médecin</option>
      </select>
      {errors.role && <p className="text-red-500">{errors.role.message}</p>}

      {error && <p className="text-red-600 text-center">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        {isSubmitting ? "Création en cours..." : "S'inscrire"}
      </button>
    </form>
  );
}
