import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-3xl mb-6">
        Total Users {users.length}
      </h2>
      {users.map((user) => (
        <div
          key={user._id}
          className="border-1 bg-orange-100 mb-2 w-96 mx-auto rounded-lg p-3 flex justify-between"
        >
          <div>{user.name}</div>
          <div className="flex justify-between gap-3">
            <div>
              <Link to={`/update/${user?._id}`}>Edit</Link>
            </div>
            <div>Delete</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
