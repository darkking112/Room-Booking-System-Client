import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomBooking({ userInfo, isFirstBooking, onCofirm }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [userType, setUserType] = useState("guest");
  const [showAvailableRooms, setShowAvailableRooms] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [message, setMessage] = useState("");
  const url = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    if (isFirstBooking) {
      setShowAvailableRooms(false);
    } else {
      setShowAvailableRooms(true);
    }
  }, [isFirstBooking]);

  useEffect(() => {
    console.log(userInfo);

    if (userInfo && typeof userInfo === "object") {
      if (userInfo.hasOwnProperty("Employee_ID")) {
        setUserType("employee");
      }
    }
  }, [userInfo]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch(`${url}/getRooms.php`);
        const data = await response.json();
        console.log(data);

        if (data && data.rooms) {
          setRooms(data.rooms);
        } else console.log("no data fetched");
      } catch (error) {
        console.log(error);
      }
    };

    fetchRooms();
  }, [url]);

  const handleBookNowClick = () => {
    setShowAvailableRooms(true);
  };

  const handleBookRoomClick = () => {
    setShowConfirmationDialog(true);
  };

  const handleConfirmClick = () => {
    console.log(userInfo);
    if (userInfo) {
      fetch(`${url}/bookRoom.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          roomID: selectedRoom.Room_ID,
          userID: userInfo.User_ID,
          name: userType === "guest" ? userInfo.Name : name,
          phoneNo: userType === "guest" ? userInfo.Phone_Number : phoneNo,
          bookingType: userType === "guest" ? "Self-Booked" : "Counter-Booked",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            setShowAvailableRooms(false);
            setShowConfirmationDialog(false);
            setName("");
            setPhoneNo("");
            if (userType === "employee") onCofirm();
            // Navigate back to GuestHome after successful booking
            navigate(`/${userType}`, { state: userInfo });
          } else {
            setShowConfirmationDialog(false);
            setMessage(data.message);
          }
        })
        .catch((error) => {
          setShowConfirmationDialog(false);
          console.log(error);
          setMessage("Error " + error);
        });
    }
  };

  const handleCancelClick = () => {
    setShowConfirmationDialog(false);
  };

  return (
    <div className="room-booking-container">
      {!showAvailableRooms && userType === "guest" && (
        <div>
          <h2>No Current Booking </h2>
          <p onClick={() => handleBookNowClick()}>Book Now</p>
        </div>
      )}

      {showAvailableRooms && (
        <div>
          <h2>Room Booking</h2>
          <hr />
          <div className="room-boxes">
            {rooms.map((room) => (
              <p
                className={`
                  ${
                    selectedRoom && room.Room_ID === selectedRoom.Room_ID
                      ? "selected"
                      : "not-selected"
                  } 
                ${room.Status.toLowerCase()}`}
                onClick={() => setSelectedRoom(room)}
              >
                {`Room ${room.Room_Number}`}
              </p>
            ))}
          </div>

          <p onClick={() => handleBookRoomClick()}>Book Room</p>
        </div>
      )}

      {message && <p>{message}</p>}

      {showConfirmationDialog && (
        <div className="message-overlay">
          <div className="message">
            {userType === "guest" ? (
              <h4>{`Are  you sure you want to confirm the booking for ${selectedRoom.Room_Number} for today?`}</h4>
            ) : (
              <div className="inputs">
                <input
                  type="text"
                  placeholder="Guest's Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type="text"
                  placeholder="Guest's Phone No"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="buttons">
              <p onClick={() => handleConfirmClick()}>Confirm</p>
              <p onClick={() => handleCancelClick()}>Cancel</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoomBooking;
