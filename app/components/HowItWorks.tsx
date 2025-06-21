"use client";

const steps = [
  {
    title: "Créer un compte sécurisé",
    description:
      "Inscrivez-vous rapidement avec un email sécurisé pour protéger vos données personnelles.",
    image: "/signup.jpg",
  },
  {
    title: "Remplir vos informations médicales",
    description:
      "Ajoutez vos antécédents, allergies et traitements pour un suivi personnalisé.",
    image: "/medical-info.jpg",
  },
  {
    title: "Partager avec votre médecin",
    description:
      "Autorisez votre médecin à accéder à votre dossier pour un meilleur diagnostic.",
    image: "/share.jpg",
  },
  {
    title: "Consulter votre historique à tout moment",
    description:
      "Accédez à vos rendez-vous, prescriptions et résultats d'examens en un clic.",
    image: "/history.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-blue-700">
        Comment ça marche ?
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4 px-6">
        {steps.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="h-56 w-full">
              <image
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
