import React from "react";
import Header from "@/components/dashboardlayout/Header";
import Sidebar from "@/components/dashboardlayout/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
}
