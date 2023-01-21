import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./pages/Layout";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
