import { useState } from 'react'


import './App.css'
import Header from './Header'
import Blogs from './component/Blogs'
import Table from './component/Table'
import TotalResult from './component/TotalResult'
import ResTable from './component/ResTable'

function App() {
const [addtable,setAddtable]=useState([]);
const [addresult, setAddresult]=useState([]);

const AddTable=(blog)=>{

  const exsit=addtable.find((pd)=>pd.id==blog.id)
  if(!exsit){
    const newaddtable=[...addtable, blog]
    setAddtable(newaddtable);

  }else{
    alert("Already exist")
  }
}
const AddResultfunc=(items)=>{
  console.log("result show")

const newAssresult=[...addresult,items];
setAddresult(newAssresult);


}
  return (
    <>
   <div className='container max-w-screen-xl'>
   <Header  />
    <div className="w-full flex justify-between">
     <div className="w-[70%] grid lg:grid-cols-2 gap-3">
     <Blogs AddTable={AddTable}  />
     </div>
     <div className="w-30%">
     <Table addtable={addtable} addresult={addresult}  AddResultfunc={AddResultfunc}   />
     </div>
      

    </div>
   </div>
    </>
  )
}

export default App
