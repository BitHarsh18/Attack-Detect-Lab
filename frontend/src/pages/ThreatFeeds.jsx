import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import FeedHistoryTable from "../components/FeedHistoryTable";
import api from "../services/api";
import toast from "react-hot-toast";
import StatusBadge from "../components/StatusBadge";

function ThreatFeeds() {

  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFeeds();
  }, []);

  const fetchFeeds = async () => {

    try {

      const response = await api.get("/feeds");

      setFeeds(response.data.feeds);

    } catch (error) {

      console.error(error);

    }

  };

  const handleSync = async () => {

    try {

      setLoading(true);

      await api.post("/feeds/sync");

      await fetchFeeds();

      toast.success("Feed synchronized successfully!");

    } catch (error) {

      console.error(error);

      toast.error("Synchronization failed!");

    } finally {

      setLoading(false);

    }

  };

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-8">

        Threat Feeds

      </h1>

      <button
        onClick={handleSync}
        disabled={loading}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg mb-6 disabled:opacity-50"
      >
        {loading ? "Syncing..." : "Sync Now"}
      </button>

      <div className="bg-white rounded-xl shadow-md p-6">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left p-3">Feed</th>

              <th className="text-left p-3">Status</th>

              <th className="text-left p-3">Indicators</th>

              <th className="text-left p-3">Last Sync</th>

            </tr>

          </thead>

          <tbody>

            {feeds.map((feed) => (

              <tr
                key={feed.name}
                className="border-b hover:bg-gray-100"
              >

                <td className="p-3">

                  {feed.name}

                </td>

                <td className="p-3">
                    <StatusBadge status={feed.status} />
                </td>

                <td className="p-3">

                  {Number(feed.indicators).toLocaleString()}

                </td>

                <td className="p-3">

                  {feed.lastSync}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <FeedHistoryTable />

    </Layout>

  );

}

export default ThreatFeeds;