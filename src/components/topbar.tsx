import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {  Search } from "lucide-react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // from shadcn/ui
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // for profile

export default function Topbar() {
  const [language, setLanguage] = useState("English");
  const [flag, setFlag] = useState("https://flagcdn.com/w20/gb.png");
  const pathname = usePathname();

  const notifications = [
    {
      title: "Settings",
      message: "Update Dashboard",
      icon: "⚙️",
      color: "bg-blue-500",
    },
    {
      title: "Appeal approval",
      message: "Radison approved an appeal",
      icon: "📅",
      color: "bg-pink-500",
    },
    {
      title: "Profile",
      message: "Update your profile",
      icon: "👤",
      color: "bg-purple-500",
    },
    {
      title: "Appeal Rejection",
      message: "Radison rejected an appeal",
      icon: "❗",
      color: "bg-red-500",
    },
  ];
  // Convert "/dashboard" → "Dashboard"
  const pageTitle = pathname.split("/").pop()?.replace("-", " ") || "Home";
  // const formattedTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);

  return (
    <section>
    <div className="w-full h-16 flex items-center justify-between px-6 bg-white shadow-sm">
      {/* Search Box */}
      <div className="flex items-center w-1/3">
        <div className="relative w-full">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Notifications */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative cursor-pointer">
          <NotificationsIcon className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {notifications.length}
          </span>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-80 p-3">
        <h3 className="text-lg font-semibold mb-3">Notification</h3>

        {notifications.map((n, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg"
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${n.color}`}
            >
              {n.icon}
            </div>
            <div>
              <p className="font-medium">{n.title}</p>
              <p className="text-sm text-gray-500">{n.message}</p>
            </div>
          </DropdownMenuItem>
        ))}

        <div className="border-t mt-2">
          <button className="w-full text-center py-2 text-sm text-gray-500 hover:text-blue-600">
            See all notification
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>

        {/* Language Switcher */}
       {/* Language Switcher */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button className="flex items-center gap-2">
      <img src={flag} alt="flag" className="w-6 h-4 rounded-sm" />
      <span>{language}</span>
    </button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuItem
      className="flex items-center justify-between"
      onClick={() => {
        setLanguage("English");
        setFlag("https://flagcdn.com/w20/gb.png");
      }}
    >
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w20/gb.png" alt="en" className="w-6 h-4" />
        <span>English</span>
      </div>
      {language === "English" && <span className="text-blue-600">✔</span>}
    </DropdownMenuItem>

    <DropdownMenuItem
      className="flex items-center justify-between"
      onClick={() => {
        setLanguage("French");
        setFlag("https://flagcdn.com/w20/fr.png");
      }}
    >
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w20/fr.png" alt="fr" className="w-6 h-4" />
        <span>French</span>
      </div>
      {language === "French" && <span className="text-blue-600">✔</span>}
    </DropdownMenuItem>

    <DropdownMenuItem
      className="flex items-center justify-between"
      onClick={() => {
        setLanguage("Spanish");
        setFlag("https://flagcdn.com/w20/es.png");
      }}
    >
      <div className="flex items-center gap-2">
        <img src="https://flagcdn.com/w20/es.png" alt="es" className="w-6 h-4" />
        <span>Spanish</span>
      </div>
      {language === "Spanish" && <span className="text-blue-600">✔</span>}
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" />
                <AvatarFallback>MR</AvatarFallback>
              </Avatar>
              <div className="text-left hidden md:block">
                <p className="text-sm font-semibold">Moni Roy</p>
                <p className="text-xs text-gray-500">Baho Pharmacy</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Manage Account</DropdownMenuItem>
            <DropdownMenuItem>Activity Log</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
    </div>
  
    </section>
  );
}
