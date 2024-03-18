import React from 'react'
import Table from './Table';

export default function Bogl({post,AddTable}) {
    const {id,recipe_name,short_description,ingredients,preparing_time,calories,recipe_image}=post;
  return (
    <>
    <div className="container ">
        <div className="grid lg:grid-cols-2   ">
            <div className="card shadow-lg w-80 ">
                        <div className="card-title">
                            <img src={recipe_image} alt="" />
                        

                        </div>
                        <div className="card-body">
                            <h1 className="text-left font-semibold text-lx">{recipe_name}</h1>
                            <p className="text-left py-3 text-lg">{short_description}</p>
                        </div>
                        <hr />
                        <div className="text-left font-blod">
                            <span className="text-left">Ingredients: 6</span>
                            {
                            ingredients.map((item, index)=> <ul key={index}> <li className="text-left py-1">{item}</li></ul>)
                            }
                        </div>
                        <div className="flex justify-between items-center">
                            <p>{preparing_time} min</p>
                            <p>{calories} calories per serving</p>

                        </div>
                        <div className="mx-auto pt-4">
                            <button className="btn py-3 px-3 rounded-lg bg-[#0BE58A]" 
                            onClick={()=>AddTable(post)}>Want to Cook</button>
                        </div>
              

            </div>

        </div>

        
    
        
    </div>
    
    
    </>
  )
}
