import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";
import img from '../asset/image9.png'
import axios from "axios";

export default function LogIn(){

    const [email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const logUser = () => {
        axios.post('url', {

        }).then((res) => {
            setEmail(res.body)
            setPassword(res.body)
        }).catch((err) =>{

        })
    }
    return(
        <>
        <div className=" bg-sky-800  p-20">
        {/* <Navbar/> */}
       
        <div className="shadow-lg  px-20 backdrop-filter bg-cyan-950 backdrop-blur-lg bg-opacity-30">
            
       
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                <img src={img} alt="" />
            </div>
        <form className="grid grid-rows-2 md:grid-rows-6 justify-center gap-5 ">
        <div className="">
        <h1 className="font-bold text-4xl text-gray-200">Hello Again</h1>
            <p className="text-2xl text-cyan-300 ">Log In</p>
            </div>
            <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-2xl  bg-gray-500 text-black border-none" placeholder="example@gmail.com" />
            <input 
            type ="text"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2xl w-96 bg-gray-500 text-black border-none" placeholder="Enter Password" />
            <button className="bg-gradient-to-r from-purple-500 to-sky-400 text-center w-96 font-bold text-gray-200 p-2 rounded-2xl mt-5 text-2xl"><Link to='/home' onClick={logUser()}>Sign in</Link></button>
        </form>
        </div>
        </div>
    </div>
{/* </div> */}


             {/* </div> */}
        
        
        </>
    )
}