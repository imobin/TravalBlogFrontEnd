import React from "react";
import { Link } from "react-router";

export default function PostCard({postList}) {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{postList.title}</h2>
          <p>
            {postList.content}
          </p>
          <p>
            Created by {postList.author}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/PostDetails/${postList.id}`}>
            <button className="btn btn-primary">More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
