import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewEmployeeForm({ onCancel, onEmployeeAdded }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const url = process.env.REACT_APP_BACKEND_URL;

  const handleAddClick = (e) => {
    e.preventDefault();

    fetch(`${url}/addEmployee.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: name,
        age: age,
        phoneNo: phoneNo,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          onEmployeeAdded(); // Call to trigger the refresh
          navigate(`/admin`);
          onCancel();
        } else setMessage(data.message);
      })
      .catch((error) => console.log(error));
  };

  const handleCancelClick = (e) => {
    e.preventDefault();
    onCancel();
  };

  return (
    <div className="form-overlay">
      {message && <p style={{ color: "red" }}>{message}</p>}
      <div className="form">
        <form onSubmit={handleAddClick}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Phone No"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="buttons">
            <button type="submit">Confirm</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewEmployeeForm;
