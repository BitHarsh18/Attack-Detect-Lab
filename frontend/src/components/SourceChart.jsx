import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

function SourceChart({ sources }) {

  return (

    <div className="bg-white rounded-xl shadow-md p-6">

      <h2 className="text-xl font-semibold mb-4">
        Threat Sources
      </h2>

      <ResponsiveContainer width="100%" height={300}>

        <BarChart data={sources}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="_id" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  );

}

export default SourceChart;