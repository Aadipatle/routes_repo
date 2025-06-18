import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [store, setStore] = useState([]);

  function handleChange(e) {
    // let { name, value } = e.target;
    let name = e.target.name;
    let value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData((prev) => [...prev, formData]);
  }

  function addCart(e) {
    let old = [...store, e];
    setStore(old);
    localStorage.setItem("cart", JSON.stringify(old));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fname"
          placeholder="enter ur fname"
          value={formData.fname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lname"
          placeholder="enter ur lname"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="enter ur lname"
          value={formData.email}
          onChange={handleChange}
        />
        <input type="submit" value="Register" />
      </form>{" "}
      <br /> <br />
      <button onClick={() => setShow(!show)}>Display Data</button> <br /> <br />
      {show
        ? data.map((e) => (
            <>
              <li>{e.fname}</li>
              <li>{e.lname}</li>
              <li>{e.email}</li>
              <button onClick={() => addCart(e)}>add</button>
            </>
          ))
        : "N/A"}
    </>
  );
}

export default Register;
