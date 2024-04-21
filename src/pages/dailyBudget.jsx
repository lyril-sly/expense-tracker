import React, { useState } from 'react';
import Navbar from '../component/navbar';
import side2 from '../asset/image5.png'

const DailyBudget = () => {
  const [dailyBudget, setDailyBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [description, setDescription] = useState('')
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [date, setDate] = useState('')
  const addExpense = () => {
    const newExpense = { name: expenseName, amount: parseFloat(expenseAmount) };
    setExpenses([...expenses, newExpense]);
    setExpenseName('');
    setDescription('')
    setDate('')
    setExpenseAmount(0);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBudget = dailyBudget - totalExpenses;

  return (
  
    <div className=' bg-sky-900 p-20 '>
    <div className="container mx-auto px-4 py-8 shadow-lg bg-cyan-950 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
        <Navbar/>
      <h1 className="text-2xl font-semibold mb-4 text-center text-gray-200">Daily Budget Tracker</h1>
       <div className=' grid grid-cols-1 md:grid-cols-2'>
       <img src={side2} alt="" />
        <form className=" ">
        <div className="mb-2">
        <label htmlFor="expense-name" className="text-cyan-400">Title:</label>
        <input
          type="text"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 text-center"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="expense-name" className="text-cyan-400">Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 text-center "
        />
      </div>
      <div className="mb-2">
        <label htmlFor="expense-amount" className="text-cyan-400">Amount:</label>
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(parseFloat(e.target.value))}
          className="rounded-2xl w-96 h-10 bg-gray-200 mb-2"
        />
        <div className='mb-2'>
          <label className="mb-2 text-cyan-400">Date:</label>
          <input 
          type="Date" 
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="rounded-2xl w-96 h-10 bg-gray-200 "
          />
        </div>
      </div>
      <button onClick={addExpense} className="bg-gradient-to-r from-purple-500 to-sky-400 text-center w-40 font-bold text-gray-200 p-2 rounded-2xl mt-5 ">Add Expense</button>
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-200">Expenses</h2>
        <ul className=''>
          {expenses.map((expense, index) => (
            <li key={index} className="mb-2">{expense.name}: ${expense.amount.toFixed(2)}</li>
          ))}
        </ul>
      </div>
      <div className="">
        <h2 className="text-lg font-semibold mb-2 text-gray-200">Budget Summary</h2>
        <p className='text-gray-200'>Total Expenses: ${totalExpenses.toFixed(2)}</p>
        <p className='text-gray-200'>Remaining Budget: ${remainingBudget.toFixed(2)}</p>
      </div>
        
        
    
        </form>
       
      </div>
      
     </div>
     </div>
  );
};

export default DailyBudget;
