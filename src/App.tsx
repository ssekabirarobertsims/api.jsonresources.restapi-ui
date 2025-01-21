import HomePage from "./pages/Home.Page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
