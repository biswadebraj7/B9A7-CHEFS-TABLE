import React from 'react'

export default function Tables({additem,AddResultfunc}) {
    //console.log(item)
    //console.log(additem)
    const {id,recipe_id,recipe_name,preparing_time,calories}=additem;
   // console.log(resultItem)
    

  return (
    <div>
        
        <div className="">
                <table className="table" id="tableRemove">
                
                  
                    <tbody>
                
                    <tr>
                        <th>{recipe_id}</th>
                        <td>{recipe_name.slice(0,8)}</td>
                        <td>{preparing_time}</td>
                        <td>{calories} </td>
                        <td><button
                        onClick={()=>AddResultfunc(additem)} 
                         className='btn bg-[#0BE58A]'>Preparing</button></td>
                    </tr>
                
                    
                    
                    
                    </tbody>
                </table>

            
</div>
    </div>
  )
}
