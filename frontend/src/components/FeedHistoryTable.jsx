import { useEffect, useState } from "react";
import api from "../services/api";
import StatusBadge from "./StatusBadge";

function FeedHistoryTable() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {

      const response = await api.get("/feeds/history");

      setHistory(response.data.data);

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mt-10">

      <h2 className="text-2xl font-bold mb-6">

        Feed History

      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th className="text-left p-3">Feed</th>

            <th className="text-left p-3">Started</th>

            <th className="text-left p-3">Inserted</th>

            <th className="text-left p-3">Skipped</th>

            <th className="text-left p-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {history.map((item) => (

            <tr
              key={item._id}
              className="border-b hover:bg-gray-100"
            >

              <td className="p-3">

                {item.feedName}

              </td>

              <td className="p-3">

                {new Date(item.startedAt).toLocaleString()}

              </td>

              <td className="p-3">

                {Number(item.inserted).toLocaleString()}

              </td>

              <td className="p-3">

                {Number(item.skipped).toLocaleString()}

              </td>

              <td className="p-3">
                <StatusBadge status={item.status} />
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default FeedHistoryTable;