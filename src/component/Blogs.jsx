import React, { useEffect, useState } from 'react'
import Bogl from './Bogl';

export default function Blogs() {
    const[blog, setBlog]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then((res)=>res.json())
        .then((data)=>setBlog(data))
    },[])
  return (
    <>
    <div>{blog.length}</div>
    {
      blog.map((post)=>  <Bogl  post={post} />)
    }
    
    
    </>
  )
}
