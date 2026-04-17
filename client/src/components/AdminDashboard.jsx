import {
  Building2Icon,
  Calendar1Icon,
  FileTextIcon,
  User2Icon,
} from "lucide-react";
import React from "react";

function AdminDashboard({ data }) {
  const states = [
    {
      icon: User2Icon,
      value: data?.totalEmployees ?? 0,
      label: "Total Employees",
      description: "Active workforce",
    },
    {
      icon: Building2Icon,
      value: data?.totalDepartment ?? 0,
      label: "Departments",
      description: "Organization units",
    },
    {
      icon: Calendar1Icon,
      value: data?.todayAttendance,
      label: "Today's attendance",
      description: "Checked in today",
    },
    {
      icon: FileTextIcon,
      value: data?.pendingLeaves,
      label: "Pending leave",
      description: "Awaiting approval",
    },
  ];
  return (
    <div className="animate-fade-in p-4">
      {/* Header */}
      <div className="page-header mb-6">
        <h1 className="page-title text-2xl font-bold">Dashboard</h1>
        <p className="page-subtitle text-gray-500">
          Welcome back, Admin - Hare's your overviews
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {states.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s}
              className="card card-hover bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{s.label}</h2>
                

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminDashboard;
