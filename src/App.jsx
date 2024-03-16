import { useState } from 'react'


import './App.css'
import Header from './Header'
import Blogs from './component/Blogs'

function App() {


  return (
    <>
   <div className='container max-w-screen-xl'>
   <Header  />
   <Blogs />
   </div>
    </>
  )
}

export default App
