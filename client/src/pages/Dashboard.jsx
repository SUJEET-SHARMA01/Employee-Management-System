import React, { useEffect, useState } from "react";
import {dummyEmployeeDashboardData, dummyAdminDashboardData} from "../assets/assets";
import Loading from "../components/Loading";
import EmployeeDashboard from "../components/EmployeeDashboard";
import AdminDashboard from "../components/AdminDashboard";

function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if(loading) return <p><Loading/></p>
  if(!data) return <p className="text-center text-slate-500 py-12">failed to load dashboard</p>

  if(data.roll === "ADMIN"){
    return <div><AdminDashboard data={data}/></div>
  }
  else{
    return <div><EmployeeDashboard data={data}/></div>
  }
  
}

export default Dashboard;
