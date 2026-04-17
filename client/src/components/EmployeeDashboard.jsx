import React from "react";
import { Calendar1Icon, FileTextIcon, IndianRupeeIcon } from "lucide-react";
import { Link } from "react-router-dom";

function EmployeeDashboard({ data }) {
  const emp = data?.employee;

  const cards = [
    {
      icon: Calendar1Icon,
      value: data?.currentMonthAttendance ?? 0,
      title: "Days Present",
      subtitle: "This month",
    },
    {
      icon: FileTextIcon,
      value: data?.pendingLeaves ?? 0,
      title: "Pending Leave",
      subtitle: "Awaiting approval",
    },
    {
      icon: IndianRupeeIcon,
      value: data?.latestPayslip?.netSalary
        ? `₹${data.latestPayslip.netSalary.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];
  return (
    <div className="animate-fade-in p-4">
      {/* Header */}
      <div className="page-header mb-6">
        <h1 className="page-title text-2xl font-bold">
          Welcome {emp?.firstName || "User"} 👋
        </h1>
        <p className="page-subtitle text-gray-500">
          {emp?.position || "Position"} - {emp?.department || "No Department"}
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="card card-hover bg-white shadow-md rounded-lg p-4 flex items-center gap-4"
            >
              <div className="bg-blue-100 p-3 rounded-full">
                <Icon className="text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{card.value}</h2>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-xs text-gray-400">{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex flex-col sm:flex-row gap-3 mt-6">
        <Link
          to="/attendance"
          className="btn-primary text-center inline-flex items-center justify-center gap-2"
        >
          Mark Attendance
        </Link>
        <Link to="/leave" className="btn-secondary text-center">
        Apply for leave
        </Link>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
