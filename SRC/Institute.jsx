// Institute.jsx
// import React from "react";

function Institute() {
  return (
    <div className="in-container">
      <h1>Institute</h1>
      <form action="">
        <div className="imgcontainer">
          <img src="assets/avatar2.png" alt="Avatar" className="avatar" />
        </div>
        <div className="inputs">
          <label htmlFor="in-name">Institution Name</label>
          <input type="text" id="in-name" placeholder="Enter Institution name" />
          <br />
          <label htmlFor="in-type">Institution-Type</label>
          <select name="in-type" id="in-type">
            <option value="College">College</option>
            <option value="School">School</option>
            <option value="Shop">Shop</option>
          </select>
          <br />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default Institute;
