import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const demoAPI="https://jsonplaceholder.typicode.com/users";

  const fetchAPI= async () => {
    try {
      const res = await fetch(demoAPI);
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };


  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading)
    return (
      <>
        <div class="spinner-grow text-primary" role="status"></div>
        <span class="sr-only">Loading...</span>
      </>
    );

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
