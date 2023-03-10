import React, { useEffect, useState } from "react";
import axios from "axios";
import './Userpro/userPro.css'
import NavBar from "./NavBar";

function Admin() {
  const [bookings, setBookings] = useState();

  const getAllBookings = () => {
    axios
      .get("http://localhost:8000/api/confirmbook")
      .then((response) => {
        let data = response.data;
        console.log(data);
        console.log("Dhruvi");
        console.log(data.allBookings);
        setBookings(data.allBookings);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllBookings();
  }, []);


  function getConfirmation(id){
    console.log(`Booking accepted with ${id}`);
    axios
    .post("http://localhost:8000/api/confirm/",{id})
    .then((res) => {
        let data = res.data;
        console.log(data);
        console.log("*********");
        console.log(data.msg);

    })
  }

  

  return (
    <div>
      <NavBar />
      <section id="about-section" className="pt-5 pb-5">
        <div className="container wrapabout">
          <div className="red"></div>
          <div className="row">
            <div className="blockabout">
              <div className="blockabout-inner text-center text-sm-start">
                <div className="title-big pb-3 mb-3">
                  <center>
                    <h3>Admin pannel</h3>
                  </center>
                </div>

                <table className="rwd-table">
                  <tbody>
                    <tr>
                      <th>Patient Name</th>
                      <th>Email</th>
                      <th>Date of Birth</th>
                      <th>City</th>
                      <th>Contact</th>
                      <th>Status</th>
                      <th>Accept</th>
                    </tr>
                    {(bookings || []).map((i) => {
                      return (
                        <tr key={i._id}>
                          <td>{i.name}</td>
                          <td>{i.email}</td>
                          <td>{i.dateOfBirth}</td>
                          <td>{i.city}</td>
                          <td>{i.mobile}</td>
                          <td>{i.isConfirm}</td>
                          <td>
                            <button onClick={() => getConfirmation(i._id)}>
                              Accept</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
