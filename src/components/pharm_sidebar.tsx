"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart2,
  SlidersHorizontal,
  Package,
  Shield,
  Users,
  FileText,
  Settings,
  LogOut,
  Lightbulb,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/pharmacy/dashboard", icon: LayoutDashboard },
  { name: "Statistics", href: "/pharmacy/statistics", icon: BarChart2 },
  { name: "Sales", href: "/pharmacy/sales", icon: SlidersHorizontal },
  { name: "Medication Stock", href: "/pharmacy/stock", icon: Package },
  { name: "Insurance", href: "/pharmacy/insurances", icon: Shield },
  { name: "Customers", href: "/pharmacy/customers", icon: Users },
  { name: "Appeals", href: "/pharmacy/appeals", icon: FileText },
];

function Sidebar() {
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    setShowLogoutModal(false);
    alert("Logged out!"); // replace with real logout logic
  };

  return (
    <>
      {/* Sidebar */}
      <div className="h-screen w-64 bg-white shadow-lg flex flex-col justify-between font-sans">
        {/* Top Section: Logo & Menu */}
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-8">
            <Image src="/logo.svg" alt="logo" width={50} height={50} />
            <h1 className="text-xl font-bold tracking-tighter">
              <span className="text-blue-600">Pharma</span>
              <span className="text-gray-800">Hack</span>
            </h1>
          </div>

          {/* Menu */}
          <nav className="space-y-2 mt-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.name} className="relative">
                  {isActive && (
                    <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-600 rounded-r-full"></div>
                  )}
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out mx-4 px-4 ${
                      isActive
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                  >
                    <item.icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Middle Section: Thoughts Time Box */}
        <div className="px-5">
          <div className="bg-lime-50 p-4 rounded-xl text-center border border-lime-200">
            <div className="w-12 h-12 bg-white rounded-full mx-auto flex items-center justify-center shadow-inner mb-2">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
            <p className="text-xs text-gray-400 font-medium">
              Thoughts <span className="text-yellow-500 font-bold">Time</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              While not trusting a medicine for the full treatment plan, don’t
              administer it once.
            </p>
          </div>
        </div>

        {/* Bottom Section: Settings / Logout */}
        <div className="space-y-2 py-6">
          {/* Settings Link */}
          <div className="relative">
            {pathname === "/pharmacy/account" && (
              <div className="absolute left-0 top-0 h-full w-1.5 bg-blue-600 rounded-r-full"></div>
            )}
            <Link
              href="/pharmacy/account"
              className={`flex items-center gap-3 py-3 rounded-lg font-medium transition-all duration-200 ease-in-out mx-4 px-4 ${
                pathname === "/pharmacy/account"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Settings className="w-5 h-5 flex-shrink-0" />
              <span>Settings</span>
            </Link>
          </div>

          {/* Logout Link */}
          <div className="relative px-4">
            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-3 py-3 text-red-500 font-medium rounded-lg px-4 hover:bg-red-50 transition-colors duration-200 w-full text-left"
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-80 text-start">
            <h2 className="text-lg font-semibold mb-2">Confirm Logout</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to sign out? This action cannot be undone an.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
