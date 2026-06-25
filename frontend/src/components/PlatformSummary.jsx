import { FiDatabase, FiGlobe, FiRefreshCw, FiActivity } from "react-icons/fi";

function PlatformSummary({ dashboard }) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mb-8">

      <div className="flex items-center gap-2 mb-5">

        <span className="w-3 h-3 rounded-full bg-green-500"></span>

        <h2 className="text-xl font-bold">

          Platform Healthy

        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="flex items-center gap-3">

          <FiDatabase
            className="text-blue-600"
            size={26}
          />

          <div>

            <p className="text-gray-500 text-sm">

              Total IOCs

            </p>

            <p className="font-bold text-xl">

              {dashboard.totalIOCs.toLocaleString()}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <FiGlobe
            className="text-green-600"
            size={26}
          />

          <div>

            <p className="text-gray-500 text-sm">

              Feed Sources

            </p>

            <p className="font-bold text-xl">

              {dashboard.sources.length}

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <FiRefreshCw
            className="text-orange-500"
            size={26}
          />

          <div>

            <p className="text-gray-500 text-sm">

              Last Sync

            </p>

            <p className="font-bold">

              Just Now

            </p>

          </div>

        </div>

        <div className="flex items-center gap-3">

          <FiActivity
            className="text-red-500"
            size={26}
          />

          <div>

            <p className="text-gray-500 text-sm">

              Active Feeds

            </p>

            <p className="font-bold text-xl">

              1 / 4

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PlatformSummary;