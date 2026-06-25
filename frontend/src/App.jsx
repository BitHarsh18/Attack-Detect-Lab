import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import ThreatFeeds from "./pages/ThreatFeeds";
import Analytics from "./pages/Analytics";

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

    </Routes>

  );

}

export default App;