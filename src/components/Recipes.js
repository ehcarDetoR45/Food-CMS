import React, { useState, useEffect } from "react";
import "../App.css";
import { client } from "../client";
import Blog from "./Blog";

export default function Recipes() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  useEffect(() => {
    client
      .getEntries({
        content_type: "blog",
      })

      .then((response) => setBlogs(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className="recipes-page">
      <h2>Recipe Page</h2>
      {blogs.map((blog, index) => {
        return (
          <Blog
            key={blog.sys.id}
            title={blog.fields.foodtype}
            description={blog.fields.description}
            image={blog.fields.pic.fields.file.url}
          />
        );
      })}
    </div>
  );
}
