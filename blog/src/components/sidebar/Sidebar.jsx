import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const [categories, setCategories]= useState([]);

  useEffect(()=>{
    const getCategories = async ()=>{
      const res = await axios.get('/categories')
      setCategories(res.data)
      //console.log(res.data)
    }
    getCategories()
  },[])



  return (
    <div className='sidebar'>
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/356147/pexels-photo-356147.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((c)=>(
            <li className="sidebarListItem">
              <Link to={`/?cat=${c.name}`} className="link">
                {c.name}
              </Link>
            </li>
              

          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        </div>

    </div>
  )
}
