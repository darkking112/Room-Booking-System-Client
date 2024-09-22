import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import NewEmployeeForm from "./NewEmployeeForm";
import "./adminHomePage.css";
function AdminHome() {
  const url = process.env.REACT_APP_BACKEND_URL;

  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [refresh, setRefresh] = useState(false); // NEW STATE to trigger useEffect

  const handleRemoveClick = (employee) => {
    setSelectedEmployee(employee);
    setShowConfirmationDialog(true);
  };

  const handleCancelClick = () => {
    setSelectedEmployee(null);
    setShowConfirmationDialog(false);
  };

  const handleConfirmClick = () => {
    fetch(`${url}/removeEmployee.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        employeeID: selectedEmployee.Employee_ID,
        userID: selectedEmployee.User_ID,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setEmployees(data.employees);
          setShowConfirmationDialog(false);
        } else setShowConfirmationDialog(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect now depends on the `refresh` state
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch(`${url}/getEmployees.php`);
        const data = await response.json();

        if (data && data.employees.length > 0) {
          setEmployees(data.employees);
        } else {
          setMessage("No Employees Yet");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEmployees();
  }, [url, refresh]); // refresh is added as a dependency

  return (
    <div key={employees.length} className="admin-home">
      <Header buuttnText={"Logout"} />

      <div className="container">
        <div className="admin-home-body">
          <h2>Employees List</h2>
          {showConfirmationDialog && (
            <div className="message-overlay">
              <div className="message">
                <h4>{`Are  you sure you want to delete ${selectedEmployee.Name} account?`}</h4>
                <div className="buttons">
                  <p onClick={() => handleConfirmClick()}>Confirm</p>
                  <p onClick={() => handleCancelClick()}>Cancel</p>
                </div>
              </div>
            </div>
          )}

          {showAddForm && (
            <NewEmployeeForm
              onCancel={() => setShowAddForm(false)}
              onEmployeeAdded={() => setRefresh((prev) => !prev)} // Toggle refresh after form submission
            />
          )}

          {message ? (
            <h3>{message}</h3>
          ) : (
            <table>
              <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </thead>
              <tbody>
                {employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.Employee_ID}</td>
                      <td>{employee.Name}</td>
                      <td>{employee.Email}</td>
                      <td onClick={() => handleRemoveClick(employee)}>
                        <p>Remove</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
          <button onClick={() => setShowAddForm(true)}>Add New Employee</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
