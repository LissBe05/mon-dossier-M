const features = [
    { title: "Interface simple", desc: "Naviguez facilement dans vos dossiers médicaux." },
    { title: "Connexion sécurisée", desc: "Authentification renforcée pour chaque utilisateur." },
    { title: "Consultation à distance", desc: "Accédez à vos données de santé où que vous soyez." },
  ];
  
  export default function Features() {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-6 border rounded shadow hover:shadow-md bg-blue-">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  