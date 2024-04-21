import Navbar from "../component/navbar";
import hp from '../asset/hp.png'
import { Link } from "react-router-dom";




export default function Hero(){
    return(
        <>
        
        <div className=" bg-sky-950 p-20">
            {/* <center className="text-4xl text-gray-400">Spend Wise</center> */}
            <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 p-20 gap-10 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-cyan-900">
            <div>
                <img src="" alt="" />
                <h1 className="text-4xl font-bold py-5 text-white">Do you want Change in the way you manage your financial stuff?</h1>
                <p className="text-sky-400">Spend Wise help you automate your financial activities start from Saving, Expenses and Budgeting in an easy and different way than ever! </p>
                <button className="bg-gradient-to-r from-purple-500 to-sky-400 text-center justify-center font-bold text-white font-bold p-3 rounded-2xl mt-5"><Link to="/sign-up ">Get Started →</Link></button>
            </div>
            <div>
                <img src={hp} alt="" />
            </div>
            </div>
        </div>

        {/* <section className="hero-container">
        <Navbar/>
            <video autoPlay loop muted className="video-background">
                <source src={vid} type="video/mp4"/>

            </video>

        </section> */}
        
        </>
    )
}