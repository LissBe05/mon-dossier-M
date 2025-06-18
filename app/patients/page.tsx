// app/patients/page.tsx
import PatientCard from "@/components/PatientCard";

export default function PatientsPage() {
  const patients = [
    { id: 1, name: "Jean Dupont", age: 45 },
    { id: 2, name: "Marie Curie", age: 37 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des patients</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {patients.map((patient) => (
          <PatientCard key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
}
