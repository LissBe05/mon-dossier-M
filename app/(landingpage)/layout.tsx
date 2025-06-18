import Link from "next/link";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Mon Dossier Médical</h1>
          <nav className="space-x-6 text-gray-700">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <Link href="/app/login" className="hover:text-blue-600">Connexion</Link>
            <Link href="/app/signup" className="hover:text-blue-600">Inscription</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
         
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 text-gray-600 text-sm">
        © {new Date().getFullYear()} Mon Dossier Médical. Tous droits réservés.
      </footer>
    </div>
  );
}
