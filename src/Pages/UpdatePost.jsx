import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router";
import { useAppContext } from "../Context/appContext";

export default function CreatePost() {
  const { id } = useParams();
  const {selectedPost,  setselectedPost} = useAppContext()
  const navigate = useNavigate(); 
  function postUpdateHandler(e) {
    e.preventDefault();
    const postInfo = {
      author: e.target.elements.author.value,
      title: e.target.elements.title.value,
      content: e.target.elements.content.value,
    };
    console.log(postInfo);
    axios
      .put(`http://localhost:3333/post/${id}`, postInfo)
      .then((i) => {
        console.log(i.data);
        alert("Post updated!")
        navigate("/")
      })
      .catch((err) => {
        console.error("Error", err);
      });
  }
  return (
    <div>
      <form onSubmit={postUpdateHandler}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Updating the post {id}</legend>

          <label className="label">Author</label>
          <input
            type="text"
            className="input"
            placeholder="Author"
            name="author"
            defaultValue={selectedPost.author}
          />

          <label className="label">Title</label>
          <input
            type="text"
            className="input"
            placeholder="Title"
            name="title"
            defaultValue={selectedPost.title}
          />

          <label className="label">Content</label>
          <input
            type="text"
            className="input"
            placeholder="Content"
            name="content"
            defaultValue={selectedPost.content}
          />

          <button className="btn btn-neutral mt-4">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
