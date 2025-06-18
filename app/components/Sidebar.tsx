"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, ActivitySquare, LogOut } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Patients", href: "/admin/patients", icon: Users },
  { label: "Activité", href: "/admin/activity", icon: ActivitySquare },
];

export default function Sidebar ( )
