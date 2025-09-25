import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LoginComponent } from "../../components/login/LoginComponent";
import ProcurementLogo from "../../assets/procurement_logo/procurement-logo.png";

interface LoginProps {
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: React.FC<LoginProps> = ({ setUserLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isTokenExist = Cookies.get("token");
    if (isTokenExist) {
      // navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        
        {/* Left Side - Branding & Info */}
        <div
          className="w-full lg:w-1/2 p-8 lg:p-12 text-white flex flex-col justify-center relative"
          style={{
            background: "linear-gradient(90deg, #1ABC9C, #1365AA)",
          }}
        >
          {/* Subtle overlay effect for depth */}
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>

          <div className="relative z-10 flex flex-col h-full justify-between py-6">
            <div>
              {/* Logo and Title */}
              <div className="flex items-center mb-6">
                <img
                  className="h-14 w-auto mr-4"
                  src={ProcurementLogo}
                  alt="TenderFlow Logo"
                />
                <div>
                  <h1 className="text-3xl font-extrabold text-white">
                    TenderFlow
                  </h1>
                  <p className="text-gray-100 text-sm font-medium">
                    Procurement Management System
                  </p>
                </div>
              </div>

              {/* Hero Heading */}
              <h2 className="text-3xl font-bold leading-tight mb-4 text-white mt-10">
                Smart, Seamless <br /> Procurement
              </h2>
              <p className="text-gray-100 text-lg">
                Your end-to-end solution for managing tenders, vendors, and
                approvals with clarity and control.
              </p>
            </div>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-white border-opacity-30">
              <p className="text-gray-100 text-xs">
                © 2024 TenderFlow. All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex items-center justify-center bg-white">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Sign in to your account
              </h2>
              <p className="text-gray-500 text-sm">
                Welcome back! Please enter your details.
              </p>
            </div>

            <LoginComponent setUserLoggedIn={setUserLoggedIn} />

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Don't have an account?
                <a
                  href="#"
                  className="text-[#1365AA] hover:text-[#0f548f] font-medium ml-1"
                >
                  Contact Administrator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
