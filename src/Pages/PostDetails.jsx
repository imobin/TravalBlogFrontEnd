import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useAppContext } from "../Context/appContext";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const {selectedPost,  setselectedPost} = useAppContext()
  useEffect(() => {
    axios
      .get(`http://localhost:3333/post/${id}`)
      .then((i) => {
        setselectedPost(i.data[0])
        // setselectedPost(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log(i);
      });
  }, []);

  function deletHandler() {
    axios
      .delete(`http://localhost:3333/post/${id}`)
      .then((i) => {
        alert("post deleted")
        navigate("/")
        // setselectedPost(i.data[0])
        // setselectedPost(i.data);
        // console.log(eventList);
      })
      .catch((i) => {
        console.log(i);
      });
  }
  
  function updateHandler() {
    navigate(`/UpdatePost/${id}`)
    // axios
    //   .put(`http://localhost:3333/post/${id}`)
    //   .then((i) => {
    //     alert("post deleted")
    //     navigate("/UpdatePost")
    //     // setselectedPost(i.data[0])
    //     // setselectedPost(i.data);
    //     // console.log(eventList);
    //   })
    //   .catch((i) => {
    //     console.log(i);
    //   });
  }

  
  // console.log(selectedPost.title)
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{selectedPost.title}</h1>
            <p className="py-6">
              {selectedPost.content}
            </p>
            <button className="btn btn-primary" onClick={updateHandler}>Update</button>
            <button className="btn btn-primary" onClick={deletHandler}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
