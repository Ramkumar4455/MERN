import React, { useState } from 'react';
import { data, Link } from 'react-router-dom';
import Popup from './Popup.jsx'
 
function Blog({ datas, addCom, deleteBlog ,editBlog}) {
  let [com, setCom] = useState("");
  let [getId,setId]=useState();
  function add(index) {

    addCom(com,getObjId(index));
  }
 
  function getObjId(index){
    let ind=0;
    datas.map((d,id)=>{
      if(index==id)
        ind=d._id;
      
      return d;
    })
    return ind;
  }

  function deletePost(index) {
    
    deleteBlog(getObjId(index));  
  }
 
  let [isEdit,setEdit]=useState(false)
 
  function changeEdit(index){
    setId((preId)=>{ return preId=index})
    setEdit(true)
  }
 
  function closeEdit(){
    setEdit(false)
  }
 
  function passEdit(data){

    editBlog(data,getObjId(getId))
  }
 
  return (
    <>
   <>
  {isEdit ? <Popup passEdit={passEdit} closeEdit={closeEdit}/>   : null}
  </>
 
    <div className="blog-container">
   
      {datas.map((d, index) => (
        <div key={index} className="blog-item">
         
          <div className="blog-content">
            <div className="blog-image">
              <img src={d.url} alt={d.title} />
            </div>
            <div className="blog-text">

              <div className='titleLine'>

              <h2>{d.title}</h2>

                  <div>
                  <button
            className="delete-btn"
            onClick={() => deletePost(index)}
          >
         <i className="fa fa-trash-o" style={{ color: "white" }}></i>
          </button>
          <button
            className="edit-btn"
            onClick={()=>changeEdit(index)}
          >
       
       <i className="fa fa-edit" ></i>

          </button>
                  </div>

              </div>
              <div className='emailLine'>
              <p>{d.email}</p>
              <Link to={`/blog/${index}`}>Read Blog</Link>
              </div>
     
       
              <p></p>
 
              <input
                type="text"
                placeholder="Add a comment"
                onChange={(e) => setCom(e.target.value)}
              />
              <button onClick={() => add(index)} className='addCom'>Add Comment</button>
              <p>Comments:</p>
              <ol>
                {
                  d.Comments?.map((dd, i) => {
                    return <><li key={`${index}:${i}`}>{dd}</li> <hr /></>
                  })
                }
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
 
export default Blog;