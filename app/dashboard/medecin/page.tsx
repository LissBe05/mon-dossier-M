import LogoutButton from "@/components/logoutbutton";

export default function MedecinDashboard() {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Bienvenue sur l'espace Médecin</h1>
          <LogoutButton />
        </div>
        <p>Gérez les dossiers de vos patients et ajoutez des commentaires médicaux.</p>
      </div>
    );
  }
  