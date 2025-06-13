import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import NotFoundPage from "./pages/404.Page";
import ApiTokenIssuePage from "./pages/Api.Token.Isue.Page";

// Main App component that sets up routing for the application
function App() {
  return (
    // Define application routes using react-router-dom
    <Routes>
      {/* Catch-all route for 404 Not Found page */}
      <Route path="*" element={<NotFoundPage />} />
      {/* Home page route */}
      <Route index element={<HomePage />} />
      {/* API token issue page route */}
      <Route path="/api/token/issue" element={<ApiTokenIssuePage />} />
    </Routes>
  );
}

export default App;
