import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-6 border-r">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="hover:underline">Accueil</Link>
        </li>
        <li>
          <Link href="/patients" className="hover:underline">Patients</Link>
        </li>
        <li>
          <Link href="/medecins" className="hover:underline">Médecins</Link>
        </li>
        <li>
          <Link href="/admin/activity" className="hover:underline">Activité</Link>
        </li>
      </ul>
    </aside>
  );
}
