import React, { useState } from "react";
import loginSignupImage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()
  console.log(data)

const userData = useSelector(state => state)
console.log(userData.user)
const dispatch = useDispatch()


  const handleShowpassword = () => {
    setShowPassword((preve) => !preve);
  };
 

  const handleOnChange = (e) => {
      const {name,value} = e.target
      setData((preve)=>{
        return{
          ...preve,
          [name] : value  
        }
      })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    const{email,password} = data
    if(email && password ){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
        method: "POST",                 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const dataRes = await fetchData.json()
    console.log(dataRes)
    toast(dataRes.message)

    if(dataRes.alert){
      dispatch(dataRes)
      setTimeout(() => {
        navigate("/")
      },1000);
    }
    }
    else{
      alert("please enter required field")
    }
  }
  return (
    <div className="p-3 md:p-4">
    <div className="w-full max-w-md  bg-white m-auto flex flex-col p-4">
      {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
      <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
        <img src={loginSignupImage} className="w-full" alt="" />
      </div>

      <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          id="email"
          name="email"
          className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          value={data.email}
          onChange={handleOnChange}
        ></input>

        <label htmlFor="password">Password</label>
        <div className="flex px-2 py-1 rounded bg-slate-200 mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">  
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full bg-slate-200 border-none outline-none"
            value={data.password}
          onChange={handleOnChange}
          ></input>
          <span
            className="flex flex-xl cursor-pointer"
            onClick={handleShowpassword}
          >
            {showPassword ? <BiShow /> : <BiHide />}
          </span>
        </div>

        
        <button className=" w-full max-w-[120px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
          Login
        </button>
      </form>
      <p className="text-left text-sm mt-2">
        Don't have account ?{" "}
        <Link to={"/signup"} className="text-red-500 underline">
          Sign Up
        </Link>
      </p>
    </div>
  </div>
  )
}

export default Login    