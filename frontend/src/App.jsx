import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import ThreatFeeds from "./pages/ThreatFeeds";
import Analytics from "./pages/Analytics";
import IOCDetails from "./pages/IOCDetails";

function App() {

  return (

    <Routes>

      <Route
        path="/"
        element={<Dashboard />}
      />

      <Route
        path="/search"
        element={<Search />}
      />

      <Route
        path="/feeds"
        element={<ThreatFeeds />}
      />

      <Route
        path="/analytics"
        element={<Analytics />}
      />
      <Route path="/ioc/:id" element={<IOCDetails />} />

    </Routes>

  );

}

export default App;