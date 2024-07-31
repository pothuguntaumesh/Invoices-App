import React from "react";
import SideBar from "./components/Sidebar";
import InvoiceContainer from "./components/InvoiceContainer";

function App() {
  return (
    <div className="flex flex-col sm:flex-row h-full w-full">
      <SideBar />
      <InvoiceContainer />
    </div>
  );
}

export default App;
