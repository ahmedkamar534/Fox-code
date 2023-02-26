import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="Navbar w-100 ">
      <nav className=" d-flex justify-content-between p-3   ">
        <ul className="d-flex align-items-end">
          <li className="logo">FOX</li>
          {props.loginUser ? (
            <>
              {" "}
              <li>
                <NavLink to="/Trending">Trending</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tv">TVshows</NavLink>
              </li>
              <li>
                <NavLink to="/actors">Actors</NavLink>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>

        <ul className="d-flex align-items-end">
          <li>
            <a href="https://google.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://google.com">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          {props.loginUser ? (
            <>
              {" "}
              <li onClick={props.logOut}>Logout</li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}
