import { useEffect, useState } from "react";
import api from "../services/api";
import StatCard from "../components/StatCard";
import TypeChart from "../components/TypeChart";
import SourceChart from "../components/SourceChart";
import SearchIOC from "../components/SearchIOC";
import RecentThreats from "../components/RecentThreats";
import Layout from "../layout/Layout";
import PlatformSummary from "../components/PlatformSummary";

function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {

    const fetchDashboard = async () => {

      try {

        const response = await api.get("/dashboard");

        setDashboard(response.data.dashboard);

      } catch (error) {

        console.error(error);

      }

    };

    fetchDashboard();

  }, []);

  if (!dashboard) {

    return <h2 className="text-center mt-10">Loading...</h2>;

  }

  return (

    <Layout>

      <h1 className="text-4xl font-bold text-center mb-10">

        Threat Intelligence Platform

      </h1>
      
      <PlatformSummary dashboard={dashboard} />

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

        <StatCard
          title="Total IOCs"
          value={dashboard.totalIOCs}
          color="#2563eb"
        />

        <StatCard
          title="Critical"
          value={dashboard.severity.critical}
          color="#dc2626"
        />

        <StatCard
          title="High"
          value={dashboard.severity.high}
          color="#ea580c"
        />

        <StatCard
          title="Medium"
          value={dashboard.severity.medium}
          color="#ca8a04"
        />

        <StatCard
          title="Low"
          value={dashboard.severity.low}
          color="#16a34a"
        />

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">

        <TypeChart
          type={dashboard.type}
        />

        <SourceChart
          sources={dashboard.sources}
        />

      </div>

      {/* Search IOC */}
      <SearchIOC />

      {/* Recent Threats */}
      <RecentThreats />

    </Layout>

  );

}

export default Dashboard;