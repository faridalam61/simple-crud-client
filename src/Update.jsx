import React from "react";
import { useLoaderData } from "react-router-dom";

function Update() {
  const user = useLoaderData();

  const handleUserUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = {name, email}
    fetch(`http://localhost:5000/users/${user._id}`,{
      method: 'PUT',
      headers:{
        'content-type' : 'application/json'
      },
      body:JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl">Update User</h2>
        <form onSubmit={handleUserUpdate}>
          <input
            type="text"
            placeholder="Enter user name"
            className="input input-bordered mt-4 input-secondary w-full max-w-xs"
            name="name"
            defaultValue={user?.name}
          />
          <input
            type="email"
            placeholder="Enter user email"
            className="input input-bordered mt-4 input-secondary w-full max-w-xs"
            name="email"
            defaultValue={user?.email}
          />
          <div className="card-actions justify-end">
            <input
              type="submit"
              className="btn bg-secondary w-full border-0 mt-4"
              value="Update"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
