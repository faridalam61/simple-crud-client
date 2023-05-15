import React from "react";

function AddUser() {
  const handleUserAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const newUser = { name, email };
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("User added successfully");
          form.reset();
        } else {
          alert("Unable to add user");
        }
      });
  };
  return (
    <div className="card w-96 mx-auto bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-3xl">Add user</h2>
        <form onSubmit={handleUserAdd}>
          <input
            type="text"
            placeholder="Enter user name"
            className="input input-bordered mt-4 input-secondary w-full max-w-xs"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter user email"
            className="input input-bordered mt-4 input-secondary w-full max-w-xs"
            name="email"
          />
          <div className="card-actions justify-end">
            <input
              type="submit"
              className="btn bg-secondary w-full border-0 mt-4"
              value="Add"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
