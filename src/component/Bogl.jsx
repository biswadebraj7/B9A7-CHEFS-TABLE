import React from 'react'

export default function Bogl({post}) {
    console.log(post)
    const {recipe_name,short_description,ingredients,preparing_time,calories,recipe_image}=post;
  return (
    <>
    <div className="container w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1">
            <div className="card shadow-lg">
                <div className="card-title">
                    <img src={recipe_image} alt="" />
                 

                </div>
                <div className="card-body">
                    <h1>{recipe_name}</h1>
                    <p>{short_description}</p>
                </div>
                <hr />
                <div className="text-left font-blod">
                    <span className="text-left">Ingredients: 6</span>
                    {
                    ingredients.map((item, index)=> <ul key={index}> <li className="text-left py-1">{item}</li></ul>)
                    }
                </div>
                <div className="flex justify-between items-center">
                    <p>{preparing_time}</p>
                    <p>{calories}</p>

                </div>
                <div className="mx-auto pt-4">
                    <button className="btn py-3 px-3 rounded-lg bg-[#0BE58A]">Want to Cook</button>
                </div>
              

            </div>
       

        </div>
    </div>
    
    
    </>
  )
}
