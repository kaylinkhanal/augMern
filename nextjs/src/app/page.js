import React from "react";

const Home = () => {
  return (
    <div className="form">
      <div>Home</div>
      <div>
        <input placeholder="Enter your name" />
      </div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>roll</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Pradhim</td>
          <td>26</td>
          <td>1</td>
        </tr>
      </table>
    </div>
  );
};

export default Home;
