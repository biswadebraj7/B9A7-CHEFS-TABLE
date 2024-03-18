import React, { useEffect, useState } from 'react'
import Bogl from './Bogl';

export default function Blogs({AddTable,AddResultfunc}) {
    const[blog, setBlog]=useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then((res)=>res.json())
        .then((data)=>setBlog(data))
    },[])
  return (
    <>

    {
      blog.map((post, postid)=>  <Bogl key={postid}  post={post} AddResultfunc={AddResultfunc} AddTable={AddTable}/>)
    }
    
    
    </>
  )
}
