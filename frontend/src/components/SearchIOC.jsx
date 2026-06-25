import { useState } from "react";
import api from "../services/api";

function SearchIOC() {

  const [value, setValue] = useState("");

  const [result, setResult] = useState(null);

  const [error, setError] = useState("");

  const handleSearch = async () => {

    try {

      setError("");

      const response = await api.get(`/iocs/search/${value}`);

      setResult(response.data.data);

    } catch (err) {

      setResult(null);

      setError("IOC Not Found");

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-semibold mb-6">

        Search IOC

      </h2>

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Enter IP, Domain or URL"
          className="border p-3 rounded-lg flex-1"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 rounded-lg"
        >

          Search

        </button>

      </div>

      {error && (

        <p className="text-red-500 mt-4">

          {error}

        </p>

      )}

      {result && (

        <div className="mt-8 border rounded-lg p-6">

          <h3 className="text-xl font-bold mb-4">

            IOC Details

          </h3>

          <p><strong>Value:</strong> {result.value}</p>

          <p><strong>Type:</strong> {result.type}</p>

          <p><strong>Threat Type:</strong> {result.threatType}</p>

          <p><strong>Severity:</strong> {result.severity}</p>

          <p><strong>Threat Score:</strong> {result.threatScore}</p>

          <p><strong>Risk Level:</strong> {result.riskLevel}</p>

          <p><strong>Source:</strong> {result.source}</p>

        </div>

      )}

    </div>

  );

}

export default SearchIOC;