import axios from "axios";
import React, { useEffect, useState } from "react";

const baseURL = "https://reqres.in/api/";

function Home() {
  const [users, setUsers] = useState([]);

  const endPoint = "users";

  function getData() {
    axios
      .get(baseURL + endPoint)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(users);

  return (
    <div>
      This is home page
      <div className="row">
        {users &&
          users?.data?.map((item, index) => {
            return (
              <div key={index} className="col-4">
                <div className="card">
                  <img src={item.avatar} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">text</h4>
                    <p className="card-text">text</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
