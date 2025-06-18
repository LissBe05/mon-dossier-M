const steps = [
    "Créer un compte sécurisé",
    "Remplir vos informations médicales",
    "Partager avec votre médecin",
    "Consulter votre historique à tout moment"
  ];
  
  export default function HowItWorks() {
    return (
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl text-center font-bold mb-10">Comment ça marche ?</h2>
        <ol className="max-w-4xl mx-auto space-y-6 list-decimal list-inside">
          {steps.map((step, i) => (
            <li key={i} className="text-lg text-gray-700">{step}</li>
          ))}
        </ol>
      </section>
    );
  }
  