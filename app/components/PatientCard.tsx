import React from "react";

export interface PatientData {
  id?: number;
  name: string;
  age: number;
  lastVisit?: string;
  medicalCondition?: string;
}

export interface PatientProps {
  patient?: PatientData;
  name?: string;
  age?: number;
  lastVisit?: string;
  medicalCondition?: string;
}

const PatientCard: React.FC<PatientProps> = ({ 
  patient, 
  name, 
  age, 
  lastVisit = "Non spécifiée", 
  medicalCondition = "Non spécifiée" 
}) => {
  // Utilise les données de l'objet patient si fourni, sinon utilise les props séparées
  const patientName = patient?.name || name || "Nom inconnu";
  const patientAge = patient?.age || age || 0;
  const patientLastVisit = patient?.lastVisit || lastVisit;
  const patientMedicalCondition = patient?.medicalCondition || medicalCondition;

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="text-xl font-semibold">{patientName}</h3>
      <p className="text-sm">Âge : {patientAge}</p>
      <p className="text-sm">Dernière visite : {patientLastVisit}</p>
      <p className="text-sm text-gray-600">{patientMedicalCondition}</p>
    </div>
  );
};

export default PatientCard;
