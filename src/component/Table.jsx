import React from 'react'
import Tables from './Tables'
import ResTable from './ResTable'

export default function Table({addtable,AddResultfunc,addresult}) {
   

  
  return (
   <>
   <div className="container">

   <div id="tablesection" className="">
            <div>
                <h1 className="text-center text-xl py-5 font-semibold">Want to cook:{addtable.length}</h1>
            </div>

            {
                addtable.map((additem,id)=> <Tables key={id} additem={additem} AddResultfunc={AddResultfunc} />)

            }
             <div className="pt-4">
                <hr />
                <div className="py-4">
                    <h1 className="font-semibold text-xl text-center">Currently cooking:{addresult.length} </h1>
                </div>
        </div>
            {
                addresult.map((item, reId )=> <ResTable key={reId}  item={item}/> )
                
            }
                  
                    
           

        </div>

       
       
   </div>
   
   </>
  )
}
