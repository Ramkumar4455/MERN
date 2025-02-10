import React, { useState } from 'react';
 
function AddBlog({ datas, addData,id }) {
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [desc, setDesc] = useState("");
 
 
    const add = () => {
        const newBlog = {
            id:id,
            title: name,
            email: email,
            url: url,
            description: desc,
        };
        addData(newBlog);
    };
 
    return (
        <div className="add-blog-container">
            <input type="text" placeholder="Enter title" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
            <textarea name="desc" id="desc" placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} ></textarea>
            <button onClick={add} >Add</button>
        </div>
    );
}
 
export default AddBlog;