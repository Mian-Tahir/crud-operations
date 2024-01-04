import React from "react";

const DataTable = () => {
  return (
    <div className="container">
      <div className="add-container">
        <div className="info-conatiner">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={""}
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={""}
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={""}
            onChange={() => {}}
          />
        </div>
        <div>
          <button className="addd"></button>
        </div>
      </div>
      <div className="search-table-container">
         
      <input
            type="text"
            placeholder="Search by Name"
            value={""}
            className="search-input"
            onChange={() => {}}
          />


      </div>
    </div>
  );
};

export default DataTable;
