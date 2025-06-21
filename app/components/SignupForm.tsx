"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface FormValues {
  email: string;
  password: string;
  role: "patient" | "medecin";
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormValues) => {
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // Redirige selon le rôle
      if (data.role === "patient") {
        router.push("/patients/dashboard");
      } else {
        router.push("/medecins/dashboard");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Échec de connexion. Vérifiez vos informations.");
    }
  };

  // ✅ Le return DOIT être dans la fonction LoginForm
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          {...register("email", { required: "Email requis" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block mb-1 font-medium">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
            errors.password ? "border-red-500" : "border-gray-300"
          }`}
          {...register("password", { required: "Mot de passe requis" })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 font-medium">Rôle</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="patient"
              {...register("role", { required: true })}
            />
            Patient
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="medecin"
              {...register("role", { required: true })}
            />
            Médecin
          </label>
        </div>
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">
            Veuillez sélectionner un rôle.
          </p>
        )}
      </div>

      {errorMessage && (
        <p className="text-red-600 text-center">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition disabled:opacity-50"
      >
        {isSubmitting ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
}
