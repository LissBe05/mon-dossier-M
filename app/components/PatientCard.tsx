interface PatientProps {
  patient: {
    id: number;
    name: string;
    age: number;
  };
}

export default function PatientCard({ patient }: PatientProps) {
  return (
    <div className="bg-white border rounded shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{patient.name}</h3>
      <p className="text-sm text-gray-600">Âge : {patient.age}</p>
      <a
        href={`/patients/${patient.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Voir le dossier
      </a>
    </div>
  );
}
