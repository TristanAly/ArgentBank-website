import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
