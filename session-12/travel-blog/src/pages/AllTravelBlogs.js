import React from "react";
import TravelBlogList from "../components/blogs/TravelBlogList";

const BLOG_DATA = [
  {
    id: 1,
    title: "My first trip to Paris",
    image:
      "https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80",
    address: "Pl. Charles de Gaulle, 75008 Paris, France",
    city: "Paris",
    description: "Very nice",
  },
  {
    id: 2,
    title: "My second trip to Paris",
    image:
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    address: "Champ de Mars, 5 Av. Anatole France, 75007 Paris, France",
    city: "Paris",
    description: "Also nice",
  },
];

const AllTravelBlogs = () => {
  return (
    <section>
      <h1>All Travel Blogs</h1>
      <TravelBlogList blogs={BLOG_DATA} />
    </section>
  );
};

export default AllTravelBlogs;
