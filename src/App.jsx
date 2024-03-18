import { useState } from 'react'

import toast, { Toaster } from 'react-hot-toast';
import './App.css'
import Header from './Header'
import Blogs from './component/Blogs'
import Table from './component/Table'
import TotalResult from './component/TotalResult'
import ResTable from './component/ResTable'

function App() {
const [addtable,setAddtable]=useState([]);
const [addresult, setAddresult]=useState([]);
const [toasted, setIndex]=useState([]);

const AddTable=(blog,toast)=>{

  const exsit=addtable.find((pd)=>pd.recipe_id==blog.recipe_id)
  if(!exsit){
    const newaddtable=[...addtable, blog]
    setAddtable(newaddtable);

  }else{
    const newtoast=[...toasted,toast];
    setIndex(newtoast);
    console.log("toast")
    toast('Here is your toast.')
    //toast.success("Already Exist")
    //alert("already exsit");
    

  }
}
const AddResultfunc=(items)=>{
  console.log("result show")
  const postDelete=addtable.filter((del)=>del.recipe_id !==items.recipe_id);
  setAddtable(postDelete)



    const newAssresult=[...addresult,items];
    setAddresult(newAssresult);








}
  return (
    <>
   <div className='container max-w-screen-xl'>
    <Toaster />
   <Header  />
    <div className="w-full flex justify-between">
     <div className="w-[70%] grid lg:grid-cols-2 gap-3">
     <Blogs AddTable={AddTable}  />
     </div>
     <div className="w-30%">
     <Table addtable={addtable} addresult={addresult} toasted={toasted}  AddResultfunc={AddResultfunc}   />
     </div>
      

    </div>
   </div>
    </>
  )
}

export default App
