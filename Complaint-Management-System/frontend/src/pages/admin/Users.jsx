import { useEffect, useState } from "react";
import API from "../../api/axios";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";

function Users() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {

    loadUsers();

  }, []);

  const loadUsers = async () => {

    const res = await API.get("/admin/users");

    setUsers(res.data);

  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.userId.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="layout">

      <Sidebar role="admin" />

      <main>

        <Navbar title="Users" />

        <div className="table-card">

          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className="search-box"
          />

          <table>

            <thead>

              <tr>

                <th>User ID</th>

                <th>Name</th>

                <th>Email</th>

                <th>Role</th>

                <th>Joined</th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((u)=>(

                <tr key={u._id}>

                  <td>{u.userId}</td>

                  <td>{u.name}</td>

                  <td>{u.email}</td>

                  <td>

                    <span className={`badge ${u.role}`}>

                      {u.role}

                    </span>

                  </td>

                  <td>

                    {new Date(u.createdAt).toLocaleDateString()}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

export default Users;