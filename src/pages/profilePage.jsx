import { useState } from "react";
import Navbar from "../component/navbar";
import Avatar from "react-avatar";
import axios from "axios";

export default async function ProfilePage() {
  const [user, setUser] = useState({
    name: "jane Akoto",
    email: "johndoe@example.com",
    password: "helloworld", 
  });

  const [email, setEmail] = useState('')

  const handleChange = async (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const api = 'http://localhost:7080'
  const url =  (`${api}/api/users/me`)

  const data = await axios.get(url, setUser)
  const response = await data.data
  setUser('')
  setEmail('')

  return (
    <>
      <div className="bg-gradient-to-r from-purple-300 to-sky-200 p-20">
        <Navbar />
        <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 p-20 gap-10 backdrop-filter backdrop-blur-lg bg-opacity-30">
          <div className="">
            <h1 className="text-center text-4xl font-bold">Profile</h1>
            <Avatar name={user.name} />
          </div>
          <form className="grid grid-rows-2 md:grid-rows-6 justify-center gap-5">
            <label htmlFor="name">User Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="rounded-2xl w-96 h-10 bg-gray-200"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="rounded-2xl w-96 h-10 bg-gray-200"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="rounded-2xl w-96 h-10 bg-gray-200"
            />
            <button className="bg-cyan-900 text-center w-40 font-bold text-white p-2 rounded-2xl mt-5">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}


