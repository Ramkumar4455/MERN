import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
function Popup({ passEdit,closeEdit}) {
 
     const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [url, setUrl] = useState("");
        const [desc, setDesc] = useState("");
     
     
        const add = () => {
            const newBlog = {
                title: name,
                email: email,
                url: url,
                description: desc,
            };
           passEdit(newBlog)
        };
 
        function close(){
            closeEdit()
        }
     
        return (
            <div className="edit-blog-container">
                <button className='X' onClick={close}>X</button>
                <p>Edit Yout Blog here</p>
                <input type="text" placeholder="Enter title" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                <textarea name="desc" id="desc" placeholder="Enter description" value={desc} onChange={(e) => setDesc(e.target.value)} className='textArea'></textarea>
                <button onClick={add} className='AddButton'>Update Blog</button>
            </div>
        );
 
}
 
export default Popup;
 