import LogoutButton from "@/components/logoutbutton";

export default function PatientDashboard() {
    return (
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Bienvenue sur votre espace Patient</h1>
          <LogoutButton />
        </div>
        <p>Consultez vos documents médicaux et le suivi de votre santé.</p>
      </div>
    );
  }
  