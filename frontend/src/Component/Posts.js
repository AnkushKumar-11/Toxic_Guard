import React from 'react'
import Navbar from './Navbar'
import '../assets/CSS/Posts/posts.css'
export default function Posts() {
  return (
    <>
      <div className="postsPage">
      <div className="navv">
        <Navbar/>
      </div>
      <div>
      {/* {<h1>Welcome {localStorage.getItem('name')}</h1>} */}
      </div>
      </div>
    </>
  )
}
