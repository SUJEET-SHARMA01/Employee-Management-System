import LoginLeftSide from "../components/LoginLeftSide";
import { ArrowRightIcon, ShieldIcon, User2Icon } from "lucide-react";
import {Link} from "react-router-dom"

function LoginLanding() {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin portal",
      descriptions:
        "Manage employee, department, payroll and system configuration",
      Icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee portal",
      descriptions:
        "View your profile, track attendance, request time off and success payslip.",
      Icon: User2Icon,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <LoginLeftSide />

      <div
        className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative 
      overflow-y-auto min-h-screen "
      >
        <div className="w-full max-w-md animate-fade-in relative z-10">
          {/* Header */}
          <div className="mb-10 text-center md:text-left">
            <h1 className="text-3xl font-medium text-slate-900 mb-3 tracking-tight">
              Welcome back
            </h1>
            <p className="text-slate-500">
              Select the portal to securely access the system.
            </p>
          </div>
          {/* Portals list */}
          <div className="space-y-4">
            {portalOptions.map((portal) => (
              <Link
                key={portal.to}
                to={portal.to}
                className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all
    duration-300 hover:border-indigo-400 hover:bg-indigo-50"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors">
                      {portal.title}
                    </h3>
                  </div>

                  <ArrowRightIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
          {/* footer */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            <p>© {new Date().getFullYear} SujeetSharma All right reserved. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLanding;
