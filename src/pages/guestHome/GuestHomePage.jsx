import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import BookedRoom from "./BookedRoom";
import RoomBooking from "../../components/RoomBooking";
import "./guestHomePage.css";

function GuestHome() {
  const location = useLocation();
  const userInfo = location.state;
  const [noBooking, setNoBooking] = useState(true);
  const [bookedRooms, setBookedRooms] = useState([]);

  const url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    console.log(userInfo);

    const fetchBookedRooms = async () => {
      try {
        const response = await fetch(
          `${url}/getBookedRooms.php?userID=${userInfo.User_ID}`
        );
        const data = await response.json();
        if (data.bookings && data.bookings.length > 0) {
          console.log(data.bookings && data.bookings.length > 0);
          setNoBooking(false);
          setBookedRooms(data.bookings);
        } else {
          console.log("try");

          setNoBooking(true);
        }
      } catch (error) {
        console.log("rty2");

        console.log(error);
        setNoBooking(true);
      }
    };

    if (userInfo && userInfo.User_ID) fetchBookedRooms();
  }, [userInfo, url]);

  if (!userInfo || !userInfo.User_ID) {
    return <div>No guest information available. Please log in again.</div>;
  }

  return (
    <div key={bookedRooms.length} className="guest-home">
      <Header buuttnText={"Logout"} />
      <div className="guest-home-body">
        {noBooking ? (
          <div className="room-booking">
            {console.log(userInfo)}
            <RoomBooking userInfo={userInfo} isFirstBooking={true} />
          </div>
        ) : (
          <div className="booked-room">
            <BookedRoom bookings={bookedRooms} userInfo={userInfo} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GuestHome;
