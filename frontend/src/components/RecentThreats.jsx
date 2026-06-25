import { useEffect, useState } from "react";
import api from "../services/api";
import SeverityBadge from "./SeverityBadge";
import RiskLevelBadge from "./RiskLevelBadge";

function RecentThreats() {

  const [threats, setThreats] = useState([]);

  const [severity, setSeverity] = useState("all");
  const [type, setType] = useState("all");
  const [source, setSource] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchRecentThreats();

  }, [severity, type, source, search]);

  const fetchRecentThreats = async () => {

    try {

      const response = await api.get("/iocs/recent", {

        params: {

          severity,
          type,
          source,
          search

        }

      });

      setThreats(response.data.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-10 hover:shadow-xl transition-all duration-300">

      <h2 className="text-2xl font-bold mb-6">

        Recent Threats

      </h2>

      {/* Filters */}

      <div className="flex flex-wrap gap-4 mb-6">

        <input
          type="text"
          placeholder="Search IOC..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 flex-1"
        />

        <select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Severity</option>
          <option value="critical">Critical</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Types</option>
          <option value="url">URL</option>
          <option value="ip">IP</option>
          <option value="domain">Domain</option>
          <option value="hash">Hash</option>
        </select>

        <select
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="all">All Sources</option>
          <option value="URLHaus">URLHaus</option>
          <option value="abuse.ch">abuse.ch</option>
          <option value="testFeed">testFeed</option>
        </select>

      </div>

      <table className="w-full border-collapse">

        <thead>

          <tr className="border-b">

            <th className="text-left p-3">IOC</th>

            <th className="text-left p-3">Type</th>

            <th className="text-left p-3">Severity</th>

            <th className="text-center p-3">Threat Score</th>

            <th className="text-center p-3">Risk Level</th>

            <th className="text-left p-3">Source</th>

          </tr>

        </thead>

        <tbody>

          {threats.length > 0 ? (

            threats.map((ioc) => (

              <tr
                key={ioc._id}
                className="border-b hover:bg-blue-50 transition-colors duration-200"
              >

                <td className="p-3 break-all font-medium">

                  {ioc.value}

                </td>

                <td className="p-3 uppercase">

                  {ioc.type}

                </td>

                <td className="p-3">

                  <SeverityBadge severity={ioc.severity} />

                </td>

                <td className="text-center p-3 font-bold text-blue-600">

                  {ioc.threatScore}

                </td>

                <td className="text-center p-3">

                  <RiskLevelBadge level={ioc.riskLevel} />

                </td>

                <td className="p-3">

                  {ioc.source}

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="6"
                className="text-center py-8 text-gray-500"
              >
                No threats found.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default RecentThreats;