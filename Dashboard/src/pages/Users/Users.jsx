import axios from "axios";
import React, { useEffect, useState } from "react";
import adminLayout from "../../hoc/adminLayout";


const Users = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    let resp = await axios.get("/get-users");
    setUsers(resp.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className={`toolHead`}>
      <div>
        <h3>Latest Users</h3>
        <table className={`table border`}>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item,index) => {
              return (
                <tr>
                  <td>
                    <img style={{ width: "40px" }} src={item.user_picture} alt="" />
                  </td>
                  <td>{item.user_name}</td>
                  <td>{item.user_email}</td>
                  <td>
                    <button onClick={async()=>{
                      let resp = await axios.delete('/delete-user?id='+item._id)
                      if(resp.data.success){
                        users.splice(index, 1);
                        setUsers([...users]);
                    }
                    }} className={`btn btn-danger`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default adminLayout(Users);
