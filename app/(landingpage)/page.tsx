// app/landingpage/page.tsx



export default function LandingPage() {
  return (
    <>
      {/* Header simple, tu peux créer un composant Navbar plus tard */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Mon Dossier Médical</h1>
          <nav>
            <ul className="flex gap-6 text-gray-700 font-medium">
              <li>
                <a href="#features" className="hover:text-blue-600 transition">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition">
                  À propos
                </a>
              </li>
              <li>
                <a href="/app/login" className="hover:text-blue-600 transition">
                  Connexion
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-20">
       
      </main>

      {/* Exemple de section en dessous du Hero */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20 text-center"
      >
        <h2 className="text-4xl font-semibold mb-10">Fonctionnalités clés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-3">Sécurité renforcée</h3>
            <p>Vos données médicales sont protégées et confidentielles.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Accès 24/7</h3>
            <p>Consultez votre dossier médical à tout moment, où que vous soyez.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Communication facile</h3>
            <p>Échangez directement avec vos médecins en toute simplicité.</p>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        © 2025 Mon Dossier Médical. Tous droits réservés.
      </footer>
    </>
  );
}
