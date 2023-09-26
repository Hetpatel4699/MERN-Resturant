import React,{useState  } from 'react'
import loginSignupImage from "../assest/login-animation.gif";
import {BiShow,BiHide} from 'react-icons/bi'; 

const Signup = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const handleShowpassword =()=>{
    setShowPassword(preve =>!preve)
  }
  const handleshowConfirmPassword =()=>{
    setshowConfirmPassword(preve =>!preve)
  }
  return (
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-md  bg-white m-auto flex items-center flex-col p-4'>
      {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
      <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md'>
        <img src={loginSignupImage} className='w-full'/>
      </div>

      <form className='w-full py-3'>
        <label htmlFor='firstname'>First Name</label>
        <input type={"text"} id="firstName" name='firstname' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>

        <label htmlFor='lastname'>Last Name</label>
        <input type={"text"} id="lastname" name='lastname' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>
       
        <label htmlFor='email'>Email</label>
        <input type={"email"} id="email" name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'></input>
        
        <label htmlFor='password'>Password</label>
        <div className='flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
        <input type={showPassword ? "text":"password"} id="password" name='password' className='w-full bg-slate-200 border-none outline-none   '></input>
        <span className='flex flex-xl cursor-pointer' onClick={handleShowpassword}>{showPassword ?<BiShow/> : <BiHide/>}</span>
        </div>
       
        <label htmlFor='confirmpassword'>Confirm Password</label>
        <div className='flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
        <input type={showConfirmPassword ? "text":"password"} id="confirmpassword" name='confirmpassword' className='w-full bg-slate-200 border-none outline-none   '></input>
        <span className='flex flex-xl cursor-pointer' onClick={handleshowConfirmPassword}>{showConfirmPassword ?<BiShow/> : <BiHide/>}</span>
        </div>


      </form>
    </div>
    </div>
  )
}

export default Signup