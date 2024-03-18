import React from 'react'
import TotalResult from './TotalResult'

export default function ResTable({item, AddResultfunc}) {
  const {recipe_id,recipe_name,preparing_time,calories}=item;
  return (
    <div>
       <div className="">

                                <table className="table">
                                
                               
                                    <tbody>
                                
                                    <tr>
                                        <th>1</th>
                                        <td>{recipe_name}</td>
                                        <td>{preparing_time}</td>
                                        <td>{calories}</td>
                                        
                                    </tr>
                                
                                    
                                    
                                    
                                    </tbody>
                                </table>
            </div>
            <div className="py-4">
                <hr />
              </div>
            <div id="result" className="float-right items-center gap-3">
             
                <ul className="flex justify-center gap-4">
                    <li>Total Time = {preparing_time} </li>
                    <li>Total Calories ={calories} </li>
                </ul>
                


            </div>

        
        
    </div>
  )
}
