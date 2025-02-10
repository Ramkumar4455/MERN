import React from 'react';
import { useParams } from 'react-router-dom';
 
 
function BlogDetails({ datas }) {
  const { id } = useParams();
  const blog = datas[id];
 
  if (!blog) {
    return <div>Blog not found!</div>;
  }
 
  return (
    <div className="card-container">
      <div className="card">
        <h1 className="card-title">{blog.title}</h1>
        <div className="card-image-container">
          <img src={blog.url} alt={blog.title} className="card-image" />
        </div>
        <p className="card-description">{blog.description}</p>
      </div>
    </div>
  );
}
 
export default BlogDetails;