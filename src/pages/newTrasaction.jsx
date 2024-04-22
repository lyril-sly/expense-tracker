import React, { useState } from 'react';
import axios from 'axios'; 

import side from '../asset/image8.png';
import Navbar from '../component/navbar';

export default function NewTransaction() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('')

  const saveTransaction = async () => {
    try {
      const response = await axios.post('url', {
        title,
        description,
        amount,
      });

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  };

  return (
    <>
      <div className=" bg-sky-800 p-20">
        <Navbar />
        <div className="shadow-lg grid grid-cols-1 md:grid-cols-2 p-20 gap-10 backdrop-filter bg-cyan-950 backdrop-blur-lg bg-opacity-30">
          <div>
            <h1 className="text-2xl font-semibold mb-4 text-gray-200">Add New Transaction</h1>
            <form>
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
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amountDeducted" className="block text-sm font-medium text-cyan-400">Amount:</label>
                <input
                  type="number"
                  id="amountDeducted"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
                  placeholder="Enter amount deducted"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-cyan-400">Date</label>
                <input
                  type="date"
                  className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96 mb-4"
                />
              </div>
              <button onClick={saveTransaction} className=" bg-gradient-to-r from-purple-500 to-sky-400 text-center justify-center font-bold text-white font-bold p-3 rounded-2xl ml-20 ">Add Transaction</button>
            </form>
          </div>
          <div>
            <h1 className='font-bold text-2xl py-5 text-gray-200'>Hey! input your transaction for today</h1>
            <img className='w-96' src={side} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

