import axios from 'axios'
import money from '../asset/image6.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'



export default function SignUp(){
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [Password, setPassword] = useState('');
    const navigate = useNavigate()


    const addUser = async(e) => {
        e.preventDefault();
        const userData = {
            email: email,
            username: userName,
            password: Password
        }
        const api = 'http://localhost:7080'
        const url = (`${api}/api/users/register`)
        console.log(userData)
        


       const data =await axios.post(url,userData)

       const response = await data.data
       navigate("/home");
            setEmail("")
            setUserName("")
            setPassword("")
       
        
    }


   
    return(
        <>
        <div className=" bg-sky-800 p-20 ">
            {/* <Navbar/> */}
        <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 p-10 gap-20 bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30">
    <div className=''>
        {/* <h1 className='text-center text-4xl font-bold text-gray-300 mt-20'>Don't be a victim</h1>
        <p className='text-center text-gray-200 py-2 '>Take control of your income and expenses today!</p> */}
        <div>
        <img className='' src={money} alt="" />
        </div>
    </div>
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
            <h1 className='text-2xl font-bold  text-gray-100 '>Sign Up</h1>
            <p className='text-gray-400'>Already have an account?<Link to="/log-in" className='text-cyan-300 font-bold '> Log In</Link> </p>
        </div>
        <form onSubmit={addUser} className="grid grid-rows-2 md:grid-rows-6">
            <label htmlFor=""  className='text-cyan-400'>User Name</label>
            <input className="rounded-2xl w-96 h-10 bg-gray-400" 
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Your Name" />
            <label htmlFor="" className='text-cyan-400'>Email</label>
            <input className="rounded-2xl w-96 h-10 bg-gray-400 text-gray-200 border-none " 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com" />
            <label htmlFor=""  className='text-cyan-300'>Password</label>
            <input className="rounded-2xl w-96 h-10 bg-gray-400"
             type="text"
             value={Password}
             onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password" />
            <div className="md:flex gap-3 mt-4">
                <input type="checkbox" />
                <p className='text-gray-300'>I agree to the <span className="text-sky-300">Platform's Terms of Service</span> and <span className='text-sky-300'>Privacy Policies</span></p>
            </div>
            <button type='submit' className="bg-gradient-to-r from-purple-500 to-sky-400 text-center w-40 font-bold text-white p-2 rounded-2xl mt-5">Create account</button>
        </form>
    </div>
</div>


             </div>
        
        
        </>
    )
}