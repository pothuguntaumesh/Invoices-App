import React from "react";
import SideBar from "./components/Sidebar";
import InvoiceContainer from "./components/InvoiceContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InvoiceDetail from "./components/InvoiceDetail";

function App() {
  return (
    <Router>
      <div className="flex flex-col sm:flex-row h-full w-full">
        <SideBar />
        <Routes>
          <Route path="/invoice/:id" element={<InvoiceDetail />} />
          <Route path="/" element={<InvoiceContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
