import React, { useState } from "react";
import "./App.css";

const LoginForm = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      inputData.fname === "" ||
      inputData.email === "" ||
      inputData.password === ""
    ) {
      alert("Enter All Fields Data");
    } else {
      setFlag(true);
    }
  };
  return (
    <>
      {flag ? <p>Hello {inputData.fname}</p> : ""}
      <form onSubmit={handleSubmit}>
        <div className="text-field">
          <input
            type="text"
            name="fname"
            onChange={handleChange}
            value={inputData.fname}
          />
        </div>
        <div className="text-field">
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={inputData.email}
          />
        </div>
        <div className="text-field">
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={inputData.password}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default LoginForm;
