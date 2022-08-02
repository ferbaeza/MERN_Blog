import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import './singlepost.css'
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom';


export default function SinglePost() {
  const location= useLocation();
  const path =location.pathname.split('/')[2];

  const [post, setPost]= useState({})

  useEffect(()=>{
    const getPost = async ()=>{
      const res = await axios.get("/posts/"+path);
      console.log(res.data)
      setPost(res.data)
    }
    getPost();
  },[path])
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          {post.photo && (

            <img 
            src={post.photo} 
            alt="" 
            className="singlePostImg" />
            )}
             <h1 className="singlePostTitle">
              {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>
                Autor: 
                  <Link to={`/?user=${post.username}`} className="link">
                    <b>{post.username}</b>
                  </Link>
          </span>
          <span>{new Date (post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.description}
          <br />
          
        </p>

        </div>

    </div>
  )
}
