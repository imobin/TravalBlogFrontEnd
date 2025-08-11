import React from "react";
import { Link } from "react-router";

export default function () {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <a className="btn btn-ghost text-xl">Travel blog</a>
        <Link to={"/"} >
        <button className="btn">Home</button>
        </Link>
        <Link to={"/CreatePost"}>
         <button className="btn">Create Post</button>
        </Link>
      </div>
    </div>
  );
}
