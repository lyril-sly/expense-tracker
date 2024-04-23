import React, { useState } from 'react';
import Navbar from '../component/navbar';
import side2 from '../asset/image5.png'
import axios from 'axios';

const DailyBudget = () => {
  const [budgets, setBudget] = useState([]);
  // const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState('')
  const handleAddBudget = (e) => {
    e.preventDefault()
    if (!title || !description 
    || !amount) {
      alert ('all fill are required');
      return;
    }
    const newBudget = { title, description, amount: parseFloat(amount) };
    // Post budget to API
    const saveBudgets = async (e) => {
      try {
        const data = await axios.post("http://localhost:6000/api/budgets", {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description,
            amount: amount,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
      } catch (error) {
        
      }
    }
    setBudget([...budgets, newBudget]);
    setTitle('');
    setDescription('')
    setDate('')
    setAmount("");
  };

  const getBudget = async () => {
    const data = await axios.get("url", {
      method: "GET"
    })
  }
  
  const deleteBudget = async (budget) => {
    const response = await axios.delete("url", budget._id);
  };
  // const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  // const remainingBudget = dailyBudget - totalExpenses;

  return (
  
    <div className=' bg-sky-900 p-20 '>
    <div className="container mx-auto px-4 py-8 shadow-lg bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
        <Navbar/>
      <h1 className="text-4xl font-semibold  text-center text-gray-200 mt-20 ml-60">Daily Budget Tracker</h1>
       <div className=' grid grid-cols-1 md:grid-cols-2'>
       <img src={side2} alt="" />
        <form onSubmit={handleAddBudget} className='mt-10'>
        <div className=" block mb-2">
        <label htmlFor="block expense-name" className="text-cyan-400 ">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 text-center block"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="block expense-name" className="text-cyan-400">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 text-center block"
        />
      </div>
      <div className="block mb-2">
        <label htmlFor="block expense-amount" className="text-cyan-400">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="rounded-2xl w-96 h-10 bg-gray-200 mb-2 block text-center"
        />
        <div className='mb-2'>
          <label className="block mb-2 text-cyan-400">Date:</label>
          <input 
          type="Date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 block"
          />
        </div>
      </div>
      <button type='submit' className="bg-gradient-to-r from-purple-500 to-sky-400 text-center w-40 font-bold text-gray-200 p-2 rounded-2xl mt-5 ">Add Expense</button>
      <button onClick={() => deleteBudget()}>delete</button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-cyan-400 mb-4">My Budget</h2>
        <ul className='text-gray-300'>
          {budgets.map((budget, index) => (
            <li key={index}><strong>{budget.title}</strong> - {budget.description} - ${budget.amount}</li>
          ))}
        </ul>
      </div>
      {/* <div className="">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Budget Summary</h2>
        <p className='text-gray-200'>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p className='text-gray-200'>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      </div> */}
        
        
    
        </form>
       
      </div>
      
     </div>
     </div>
  );
};

export default DailyBudget;
