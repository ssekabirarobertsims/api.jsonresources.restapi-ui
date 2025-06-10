import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import NotFoundPage from "./pages/404.Page";
import ApiTokenIssuePage from "./pages/Api.Token.Isue.Page";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route index element={<HomePage />} />
      <Route path="/api/token/issue" element={<ApiTokenIssuePage />} />
    </Routes>
  );
}

export default App;
