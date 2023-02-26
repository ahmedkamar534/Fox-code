import Joi from "joi";
import React, { useState } from "react";

export default function Register(props) {
  const [user, setuser] = useState({
    frist_name: "",
    last_name: "",
    age: "",
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
      props.history.push("/login");
    }
  }

  function validation() {
    const Joi = require("joi");
    const schema = Joi.object({
      frist_name: Joi.string().min(3).max(10).required(),
      last_name: Joi.string().min(3).max(10).required(),
      age: Joi.number().integer().min(15).max(90),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[0-9]{1,30}$")),
    });
    return schema.validate(user, { abortEarly: false });
  }

  return (
    <div className="Register">
      <form className=" py-5 w-75 mx-auto " onSubmit={submit}>
        <h1 className="text-center mt-5">REGISTER NOW</h1>
        {validate
          ? validate.map((e, i) => (
              <div key={i} className="alert alert-danger p-2">
                {e.message}
              </div>
            ))
          : ""}

        <div className="py-2 mx-auto">
          <label htmlFor="frist_name">Frist Name</label>
          <input
            onChange={getUser}
            type="text"
            name="frist_name"
            className="form-control"
          />
        </div>
        <div className="py-2">
          <label htmlFor="last_name">Last Name</label>
          <input
            onChange={getUser}
            type="text"
            name="last_name"
            className="form-control "
          />
        </div>
        <div className="py-2">
          <label htmlFor="age">Age</label>
          <input
            onChange={getUser}
            type="number"
            name="age"
            className="form-control "
          />
        </div>
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
