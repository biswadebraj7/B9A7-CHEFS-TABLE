import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import "./header.css";
import bgphoto from "./assets/Rectangle 1.png"


export default function Header() {

  return (
    <>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a className='text-base font-normal'>Home</a></li>
        <li><a className='text-base font-normal'>Recipes</a></li>
        <li><a className='text-base font-normal'>About</a></li>
        <li><a className='text-base font-normal'>Search</a></li>

       
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    <li><a className='text-base font-normal'>Home</a></li>
        <li><a className='text-base font-normal'>Recipes</a></li>
        <li><a className='text-base font-normal'>About</a></li>
        <li><a className='text-base font-normal'>Search</a></li>
    </ul>
  </div>
  <div class="navbar-end gap-8">
  <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <a class=""><FaRegUserCircle /></a>
  </div>
</div>
<section className=" py-12">
<div className="banner w-full h-[600px] relative"  >
  <img src={bgphoto} className='full h-[600px]' alt="" />
  <div className="absolute top-1/4">
    <h1 className="text-5xl font-blod text-center w-3/5  mx-auto leading-relaxed text-white">Discover an exceptional cooking class tailored for you!</h1>
    <p className="text-center font-normal text-lg w-3/4 mx-auto py-6 text-white">Cooking recipes are detailed instructions that guide individuals through the process of preparing a specific dish or meal. These instructions typically include a list of ingredients along with precise measurements, step-by-step cooking methods, and sometimes additional tips or variations</p>

    <div className="flex justify-center items-center  gap-7">
      <a href='' className='btn text-xl font-semibold border-none bg-[#0BE58A] text-[#150B2B]'>Explore Now</a>
      <a href="" className="bg-transparent rounded-lg py-3 px-4 border-2 border-[#FFFFFF] border-spacing-2 text-white">Our Feedback</a>

    </div>
  </div>

</div>
  
  
</section>
<section>
  <div className="mx-auto pb-12">
    <h1 className="text-4xl text-center font-semibold">Our Recipes</h1>
    <p className="pt-6 text-base text-center w-3/5 mx-auto">The goal of a cooking recipe is to help people create delicious and consistent meals by following clear and easy-to-understand directions. Recipes can range from simple and quick dishes suitable for beginners to complex gourmet meals for experienced cooks. </p>

  </div>
</section>
   
    
    
    </>
  )
}
