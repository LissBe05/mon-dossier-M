export default function ActivityPage() {
  const activities = [
    "Jean Dupont a mis à jour son dossier",
    "Dr. Alice a ajouté une note",
    "Connexion réussie par Marie Curie",
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Activité récente</h1>
      <ul className="space-y-4">
        {activities.map((act, i) => (
          <li key={i} className="bg-white p-4 shadow rounded">
            {act}
          </li>
        ))}
      </ul>
    </div>
  );
}
