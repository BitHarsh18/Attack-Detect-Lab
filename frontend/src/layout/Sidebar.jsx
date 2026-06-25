import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6">

      <h1 className="text-2xl font-bold mb-10">
        Threat Intel
      </h1>

      <nav className="flex flex-col gap-4">

        <NavLink
          to="/"
          className="hover:text-blue-400"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/search"
          className="hover:text-blue-400"
        >
          IOC Search
        </NavLink>

        <NavLink
          to="/feeds"
          className="hover:text-blue-400"
        >
          Threat Feeds
        </NavLink>

        <NavLink
          to="/analytics"
          className="hover:text-blue-400"
        >
          Analytics
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;