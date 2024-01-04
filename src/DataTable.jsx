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
          <button className="addd"> ADD</button>
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

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>john</td>
              <td>male</td>
              <td>21</td>
              <td className="actions">
                <button>edit</button>
                <button>delete</button>
              </td>
              
            </tr>
          </tbody>
        </table>

        <div className="pagination"></div>
      </div>
    </div>
  );
};

export default DataTable;
