import Navbar from "./component/navbar";
import LogIn from "./pages/userLogin";
import SignUp from "./pages/userSignUp";
import Hero from "./pages/hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTransaction from "./pages/allTransaction";
import NewTransaction from "./pages/newTrasaction";
import Profile from "./pages/profilePage";
import DailyBudget from "./pages/dailyBudget";
import { Home } from "./pages/home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/all" element={<AllTransaction />} />
          <Route path="/new" element={<NewTransaction />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/daily" element={<DailyBudget />} />
          <Route path="/home" element={<Home/>}/>
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}
