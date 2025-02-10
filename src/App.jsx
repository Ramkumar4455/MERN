import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog.jsx';
import AddBlog from './AddBlog.jsx';
import BlogDetails from './BlogDetails.jsx';
import Header from './header.jsx'
function App() {
  const [datas, setDatas] = useState([]);

  const [id,setId]=useState();

  useEffect(() => {
    axios.get("http://localhost:5000/blogs").then(response => {
      setDatas(response.data);
    });
  }, []);

  const addData = async (data) => {
    const response = await axios.post("http://localhost:5000/blogs", data);
    setDatas([...datas || [], response.data]);
  };

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/blogs/${id}`);
    setDatas(datas.filter(blog => blog._id !== id));
  };

  const addCom = (data, index) => {
    setDatas((prevDatas) => {
      const newDatas = prevDatas.map((item, i) =>
        item._id === index ? { ...item || [], Comments: [...item?.Comments , data] } : item
      );
      return newDatas;
    });
    
  };

  const editBlog = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/blogs/${id}`, data);
    setDatas(datas.map(blog => (blog._id === id ? response.data : blog)));
  };

  return (
    <Router>
        <Header></Header>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<><Blog datas={datas} deleteBlog={deleteBlog} editBlog={editBlog} addCom={addCom}/><AddBlog addData={addData} /></>} />
          <Route path="/blog/:id" element={<BlogDetails datas={datas} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
