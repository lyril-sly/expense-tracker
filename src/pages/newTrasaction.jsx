import React, { useState } from "react";
import axios from "axios";
import Navbar from "../component/navbar";
import { useEffect } from "react";

export default function NewTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");


  const handleAddTransaction = async (e) => {
    e.preventDefault();
    if (!title || !description || !amount || !date) {
      alert("All fields are required");
      return;
    }
    
    const newTransaction = { title, description, amount: parseFloat(amount), type, date };

    const transData = {
      title: title,
      description: description,
      amount: amount
    }
    
    const data= await axios.post('http://localhost:7080/api/transactions,', transData)

    const res = await data.data
    setTransactions([...transactions, newTransaction])
    setTitle('')
    setDescription('')
    setDate('')
    setAmount('')
    setType('')

  const api = "http://localhost:7080";
  const deleteTransaction = async (transactionToDelete) => {
    try {
      await axios.delete(`${api}/api/transactions/${transactionToDelete._id}`);
      setTransactions(transactions.filter((transaction) => transaction !== transactionToDelete));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  

  // useEffect(() => {
  
  // }, []);

  return (
    <>
      <div className=" bg-sky-800 p-20">
        <Navbar />
        <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 p-20 gap-10 backdrop-filter bg-cyan-950 backdrop-blur-lg bg-opacity-30">
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-gray-200">Add New Transaction</h1>
            <form onSubmit={handleAddTransaction}>
              <div className="mb-4">
                <label htmlFor="transactionSubject" className="block text-sm font-medium text-cyan-400">Title:</label>
                <input
                  type="text"
                  id="transactionSubject"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl w-96 h-10 bg-gray-500"
                  placeholder="Enter your transaction"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-400">Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96 text-gray-100"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amountDeducted" className="block text-sm font-medium text-cyan-400">Amount:</label>
                <input
                  type="number"
                  id="amountDeducted"
                  value={amount}
                  onChange={(e) => setAmount(parseFloat(e.target.value))}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-400">Type:</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-400">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96 mb-4"
                />
              </div>
              <button type="submit" className=" bg-gradient-to-r from-purple-500 to-sky-400 text-center justify-center font-bold text-white font-bold p-3 rounded-2xl ml-20 ">Add Transaction</button>

              <div className="mt-4">
        <h2 className="text-lg font-semibold text-cyan-400 mb-4">Transactions</h2>
        <ul className='text-gray-300'>
          {transactions.map((transaction, index) => (
            <div className="flex" key={index}>
              <li><strong>{transaction.title}</strong> : {transaction.description} : {transaction.type === "income" ? "Income" : "Expense"} : Gh{transaction.amount} : {transaction.date}</li>
              <button className="bg-red-500 rounded px-1" onClick={() => deleteTransaction(transaction)}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
            </form>
          </div>
          <div>
            <h1 className="font-bold text-2xl py-5 text-gray-200">Input your transaction</h1>
            {/* <img className="w-96" src={side} alt="" /> */}
          </div>
        </div>
      </div>
     
   </>
  )
  }
}