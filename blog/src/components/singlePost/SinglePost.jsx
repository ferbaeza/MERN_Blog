import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom'
import './singlepost.css'
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import {Context} from "../../context/Context"


export default function SinglePost() {
  const location= useLocation();
  const path =location.pathname.split('/')[2];

  const [post, setPost]= useState({})
  const {user} = useContext(Context);
  
  const[title, setTitle]= useState("");
  const[description, setDescription]=useState("");
  const[updateMode, setUpdateMode]=useState(false);

  const PF ="http://localhost:3001/images/" ;

  const handleUpdate= async()=>{
      try {
        await axios.put(`/posts/${post._id}`, {
          username: user.username,
          title,
          description,
        });
        setUpdateMode(false)
      } catch (err) {}
    };


  const handleDelete = async()=>{
    try {
      await axios.delete("/posts/"+ path, {
          data:{username:user.username}
        }
      );
      window.location.replace('/');
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("/posts/"+path);
      setPost(res.data)
      setTitle(res.data.title);
      setDescription(res.data.description);
    }
    getPost();
  },[path])
  
  console.log(post)
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          {post.photo && (
                <img 
                src={PF + post.photo} 
                alt="" 
                className="singlePostImg" />
              )
          }
          {updateMode ?
            (
              <input
                type="text"
                value={title}
                className="singlePostTitleInput"
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
              
            ):(
              <h1 className="singlePostTitle">
              {title}
              {post.username === user?.username &&(
                <div className="singlePostEdit">
                  <i className="singlePostIcon far fa-edit" onClick={()=> setUpdateMode(true)}></i>
                  <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                </div>
              )}
        </h1>
                  )}  
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
                Autor: 
                  <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                  </Link>
          </span>
          <span>{new Date (post.createdAt).toDateString()}</span>
        </div>
        {updateMode?(
          <textarea className='singlePostDescInput'
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          autoFocus/>
        ):(

          <p className="singlePostDesc">
          {description}
          <br />
          
        </p>
          )}
          {updateMode &&(
            <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
          )}

        </div>

    </div>
  )
}
