import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Layout from "../layout/Layout";
import SeverityBadge from "../components/SeverityBadge";
import RiskLevelBadge from "../components/RiskLevelBadge";

function IOCDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [ioc, setIOC] = useState(null);

  useEffect(() => {

    const fetchIOC = async () => {

      try {

        const response = await api.get(`/iocs/${id}`);

        setIOC(response.data.data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchIOC();

  }, [id]);

  if (!ioc) {

    return (
      <Layout>
        <h2 className="text-2xl font-bold p-6">Loading...</h2>
      </Layout>
    );

  }

  return (

    <Layout>

      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Back to Dashboard
      </button>

      <h1 className="text-4xl font-bold mb-8">
        IOC Details
      </h1>

      <div className="bg-white rounded-xl shadow-md p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">IOC Value</p>
            <p className="font-semibold break-all">{ioc.value}</p>
          </div>

          <div>
            <p className="text-gray-500">Type</p>
            <p>{ioc.type}</p>
          </div>

          <div>
            <p className="text-gray-500">Severity</p>
            <SeverityBadge severity={ioc.severity} />
          </div>

          <div>
            <p className="text-gray-500">Threat Score</p>
            <p className="font-bold text-blue-600">
              {ioc.threatScore}
            </p>
          </div>

          <div>
            <p className="text-gray-500">Risk Level</p>
            <RiskLevelBadge level={ioc.riskLevel} />
          </div>

          <div>
            <p className="text-gray-500">Source</p>
            <p>{ioc.source}</p>
          </div>

          <div>
            <p className="text-gray-500">Created</p>
            <p>{new Date(ioc.createdAt).toLocaleString()}</p>
          </div>

          <div>
            <p className="text-gray-500">Updated</p>
            <p>{new Date(ioc.updatedAt).toLocaleString()}</p>
          </div>

        </div>

      </div>

    </Layout>

  );

}

export default IOCDetails;