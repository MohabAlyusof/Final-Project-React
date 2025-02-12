import React from "react";
import { Routes } from "react-router-dom";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";
import MyAppointments from "./Pages/MyAppointments";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  );
}

export default App;
