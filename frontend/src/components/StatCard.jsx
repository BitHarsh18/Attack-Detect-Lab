function StatCard({ title, value, color }) {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 border-l-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
      style={{ borderColor: color }}
    >
      <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-3 text-gray-800">
        {Number(value).toLocaleString()}
      </h2>
    </div>
  );
}

export default StatCard;