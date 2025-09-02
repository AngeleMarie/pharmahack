"use client";
import React from "react";
import TopBar from "@/components/topbar";
import SideBar from "@/components/ins_sidebar";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import EditIcon from "@mui/icons-material/Edit";


export default function Profile() {

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      <SideBar />
      <div className="flex-1 overflow-hidden">
        <TopBar />
        <section className="p-4 md:p-6 lg:p-10">
          
        
      <h2 className="text-2xl text-[#202224]/80 font-semibold p-6">Settings</h2>

          {/* Profile Image Section */}
        <main className="bg-white p-6 rounded-lg shadow ">
   <div className="mb-6">
            <p className="capitalize text-[#1B212D] font-medium text-lg md:text-xl">
              account information
            </p>
            <p className="text-[#1B212D]/70 text-sm md:text-base">
              Update your account information
            </p>
          </div>
      
          <div className="flex justify-center mb-6">
            
            <div className="relative">
              <img
                src="/jane.png"
                alt="User Profile"
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-gray-300"
              />
              <button
                className="absolute bottom-2 right-2 text-center bg-blue-500 hover:bg-blue-700 text-white pb-1 rounded-full h-8 w-8 shadow"
              >
                <EditIcon style={{ fontSize: 16 }} />
              </button>
              <input
                type="file"
                accept="image/*"
                className="absolute bottom-2 right-2 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          {/* Personal Information Form */}
          <main className="max-w-5xl mx-auto  p-4 md:p-6">
            <div
              className="flex justify-end text-blue-500 font-medium mb-4 cursor-pointer"
        
            >
              <BorderColorOutlinedIcon className="mr-1" />
        
            </div>

            <p className="capitalize text-blue-500 font-medium text-base md:text-lg mb-4">
              personal information
            </p>

            <form  className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="fname"
                    className="text-main-black font-medium mb-1 text-sm"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="fname"
                    
                    className="border rounded-md p-2 text-main-black/80 outline-none text-sm bg-gray-100"
                
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="lname"
                    className="text-main-black font-medium mb-1 text-sm"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lname"
                    className="border rounded-md p-2 text-main-black/80 outline-none text-sm bg-gray-100"
                
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="organisation"
                    className="text-main-black font-medium mb-1 text-sm"
                  >
                    Organisation
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    id="organisation"
                
                    className="border rounded-md p-2 text-main-black/80 outline-none text-sm bg-gray-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email_phone"
                    className="text-main-black font-medium mb-1 text-sm"
                  >
                   Email/Phone Number
                  </label>
                  <input
                    type="tel"
                    name="email_phone"
                    id="nber"
                    className="border rounded-md p-2 text-main-black/80 outline-none text-sm bg-gray-100"
            
                  />
                </div>
                <div className="flex flex-col md:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-main-black font-medium mb-1 text-sm"
                  >
                    Role
                  </label>
                  <input
                    type="role"
                    name="role"
                    id="role"
                  
                    className="border rounded-md p-2 text-main-black/80 outline-none text-sm bg-gray-100"
                    
                  />
                </div>
              </div>

            </form>
          </main>
        </main>

        </section>
      </div>
    </div>
  );
}


