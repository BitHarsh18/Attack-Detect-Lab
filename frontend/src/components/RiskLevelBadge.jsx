function RiskLevelBadge({ level }) {

  const styles = {
    Critical: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
        styles[level] || "bg-gray-100 text-gray-700"
      }`}
    >
      {level}
    </span>
  );

}

export default RiskLevelBadge;