import Joi from "joi";
import React, { useState } from "react";

export default function Login(props) {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [validate, setvalidate] = useState([]);

  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setuser(myUser);
  }

  function submit(e) {
    e.preventDefault();
    let userValidation = validation();
    if (userValidation.error) {
      setvalidate(userValidation.error.details);
    } else {
      localStorage.setItem("user", "login");
      props.getUserInfo();
      props.history.push("/trending");
    }
  }

  function validation() {
    const Joi = require("joi");
    const schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[0-9]{1,30}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className="login">
      <div className="alert alert-info text-center w-50 mx-auto">
        use any valid email with any number for password
      </div>
      <form className=" py-5 w-75 mx-auto " onSubmit={submit}>
        <h1 className="text-center mt-5">LOGIN</h1>
        {validate
          ? validate.map((e, i) => (
              <div key={i} className="alert alert-danger p-2">
                {e.message}
              </div>
            ))
          : ""}

        <div className="py-2">
          <label htmlFor="email">Email</label>
          <input
            onChange={getUser}
            type="email"
            name="email"
            className="form-control "
          />
        </div>
        <div className="py-2">
          <label htmlFor="password">Password</label>
          <input
            onChange={getUser}
            type="password"
            name="password"
            className="form-control "
          />
        </div>
        <button type="submit" className="btn btn-danger mt-3 p-2">
          Register
        </button>
      </form>
    </div>
  );
}
