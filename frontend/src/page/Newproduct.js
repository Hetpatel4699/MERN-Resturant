import React from 'react'
import { BsCloudUpload } from 'react-icons/bs'


const Newproduct = () => {
  return (
    <div className=" p-4">
      <form className="m-auto w-full max-w-md shadow flex flex-col p-3 bg-white">
        <lable htmlFor='name'>Name</lable>
        <input type={"text"} name="name" className='bg-slate-200 p-2 my-1'/>

        <lable htmlFor='category'>Category</lable>
        <select className='bg-slate-200 p-2 my-1 ' id='category'>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Icecream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <div className='h-40 w-full bg-slate-300 my-3 rounded flex items-center justify-center'>
        <span className='text-5xl'><BsCloudUpload/></span>
        </div>

        <lable htmlFor="price">Price</lable>
        <input type={"text"} className='bg-slate-200 p-2 my-1'   />
      </form>
    </div>
  )
}

export default Newproduct