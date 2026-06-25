function SeverityBadge({ severity }) {

  const colors = {
    critical: "bg-red-100 text-red-700",
    high: "bg-orange-100 text-orange-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-semibold ${
        colors[severity] || "bg-gray-100 text-gray-700"
      }`}
    >
      {severity.toUpperCase()}
    </span>
  );

}

export default SeverityBadge;