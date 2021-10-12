import React from "react";
import NewTravelBlogForm from "../components/blogs/NewTravelBlogForm";

const addNewTravelBlogHandler = (newBlogData) => {
  const apiUrl = process.env.REACT_APP_TRAVEL_API_URL;

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newBlogData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const NewTravelBlog = () => {
  return (
    <div>
      <h1>New Travel Blog</h1>
      <NewTravelBlogForm onAddTravelBlog={addNewTravelBlogHandler} />
    </div>
  );
};

export default NewTravelBlog;
