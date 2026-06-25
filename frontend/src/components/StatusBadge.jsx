function StatusBadge({ status }) {

  const styles = {
    Online: "bg-green-100 text-green-700",
    Success: "bg-green-100 text-green-700",

    Failed: "bg-red-100 text-red-700",

    "Coming Soon": "bg-orange-100 text-orange-700",

    Offline: "bg-red-100 text-red-700"
  };

  return (

    <span
      className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>

  );

}

export default StatusBadge;