// app/page.tsx (ou app/home/page.tsx selon ton arborescence)
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6 md:p-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Mon Dossier Médical
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
          Une plateforme sécurisée pour stocker vos documents médicaux, consulter des médecins, et suivre votre santé avec sérénité.
        </p>
      </section>

      {/* Bloc illustré */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        {/* Image 1 : Patient */}
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/patient.jpg"
            alt="Patient souriant"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>

        {/* Texte + boutons */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4">Accès sécurisé pour tous</h2>
          <p className="text-gray-700 mb-6">
            Que vous soyez patient ou médecin, accédez facilement à votre interface pour gérer, consulter et suivre les données médicales en toute confidentialité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="/login?role=patient"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Connexion Patient
            </Link>
            <Link
              href="/login?role=medecin"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Connexion Médecin
            </Link>
          </div>
        </div>
      </section>

      {/* Image 2 : Médecin */}
      <section className="mt-16">
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <Image
            src="/images/doctor.jpg"
            alt="Médecin à l'écoute"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </section>
    </main>
  );
}
