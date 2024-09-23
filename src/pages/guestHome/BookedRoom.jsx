import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RoomBooking from "../../components/RoomBooking";

function BookedRoom({ bookings, userInfo }) {
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
  const [showRoomBooking, setShowRoomBooking] = useState(false);
  const [roomNo, setRoomNo] = useState(null);
  const [roomID, setRoomID] = useState(null);
  const [bookingID, setBookingID] = useState(null);

  const url = process.env.REACT_APP_BACKEND_URL;

  const handleCancelBookingClick = (bookingID, roomID, roomNo) => {
    setRoomNo(roomNo);
    setBookingID(bookingID);
    setRoomID(roomID);
    setShowMessage(true);
  };

  const handleCancelClick = () => {
    setShowMessage(false);
    setRoomNo(null);
    setBookingID(null);
    setRoomID(null);
  };

  const handleConfirmClick = () => {
    fetch(`${url}/cancelBooking.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        bookingID: bookingID,
        roomID: roomID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setShowMessage(false);
          setRoomNo(null);
          setBookingID(null);
          setRoomID(null);
          setShowRoomBooking(false);
          navigate("/guest", { state: userInfo });
        } else {
          console.log(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="booked-rooms-table">
      {!showRoomBooking && (
        <div>
          <h2>Booking</h2>
          <table>
            <thead>
              <th>Booking ID</th>
              <th>Room No</th>
              <th>Action</th>
            </thead>

            <tbody>
              {bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking.Booking_ID}</td>
                    <td>{booking.Room_Number}</td>
                    <td>
                      <p
                        onClick={() =>
                          handleCancelBookingClick(
                            booking.Booking_ID,
                            booking.Room_ID,
                            booking.Room_Number
                          )
                        }
                      >
                        Cancel
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {showMessage && (
            <div className="message-overlay">
              <div className="message">
                <h4>{`Are you sure you want to cancel the booking for room number ${roomNo} ?`}</h4>
                <div className="buttons">
                  <p onClick={() => handleConfirmClick()}>Confirm</p>
                  <p onClick={() => handleCancelClick()}>Cancel</p>
                </div>
              </div>
            </div>
          )}
          <button onClick={() => setShowRoomBooking(true)}>Book More</button>
        </div>
      )}

      {showRoomBooking && (
        <RoomBooking userInfo={userInfo} isFirstBooking={false} />
      )}
    </div>
  );
}

export default BookedRoom;
