// app/dashboard/layout.tsx


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
