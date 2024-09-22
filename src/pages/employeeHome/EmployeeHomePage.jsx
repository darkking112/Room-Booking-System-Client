import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import RoomBooking from "../../components/RoomBooking";
import "./employeeHomePage.css";

function EmployeeHome() {
  const location = useLocation();
  const employee = location.state;
  let num = 0;
  const [showRoomBooking, setShowRoomBooking] = useState(false);
  return (
    <div key={++num} className="employee-home">
      <Header buuttnText={"Logout"} />

      <div className="employee-home-body">
        {!showRoomBooking ? (
          <button onClick={() => setShowRoomBooking(true)}>New Booking</button>
        ) : (
          <RoomBooking
            userInfo={employee}
            isFirstBooking={false}
            onCofirm={() => setShowRoomBooking(false)}
          />
        )}
      </div>
    </div>
  );
}

export default EmployeeHome;
