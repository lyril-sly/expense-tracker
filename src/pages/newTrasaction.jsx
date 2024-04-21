import React, { useState } from 'react';
import side from '../asset/image8.png'
import Navbar from '../component/navbar';

export default function NewTransaction() {
  const [transactionSubject, setTransactionSubject] = useState('');
  // const [income, setIncome] = useState('');
  const [amountDeducted, setAmountDeducted] = useState('');

  const saveTransaction = async () => {
    // Assuming you have an API endpoint to save the transaction
    const response = await fetch('/api/saveTransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transactionSubject,
        // income,
        amountDeducted,
      }),
    });
    const data = await response.json();
    console.log(data); // Handle the response as needed
  };

  const checkBalance = async () => {
    
    const response = await fetch('');
    const data = await response.json();
    console.log(data); 
  };

  return (
    <>
       <div className=" bg-sky-800 p-20">
       <Navbar/>
        <div className='shadow-lg grid grid-cols-1 md:grid-cols-2 p-20 gap-10 backdrop-filter bg-cyan-950 backdrop-blur-lg bg-opacity-30'>
        <div>
      <h1 className="text-2xl font-semibold mb-4 text-gray-200">Add New Transaction</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="transactionSubject" className="block text-sm font-medium text-cyan-400">Title:</label>
          <input
            type="text"
            id="transactionSubject"
            value={transactionSubject}
            onChange={(e) => setTransactionSubject(e.target.value)}
            className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl w-96 h-10 bg-gray-500"
            placeholder="Enter your transaction"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-cyan-400">Description</label>
          <input 
          type="text"
          className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
          />
         </div>
        <div className="mb-4">
          <label htmlFor="income" className="block text-sm font-medium text-cyan-400">Type:</label>
          <select name="type" id="type" className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl w-96 h-10 bg-gray-500">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {/* <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="mt-1 block px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl w-96 h-10 bg-gray-200"
            placeholder="Enter your income"
          /> */}
        </div>
        <div className="mb-4">
          <label htmlFor="amountDeducted" className="block text-sm font-medium text-cyan-400">Amount:</label>
          <input
            type="number"
            id="amountDeducted"
            value={amountDeducted}
            onChange={(e) => setAmountDeducted(e.target.value)}
            className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96"
            placeholder="Enter amount deducted "
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-cyan-400">Date</label>
          <input 
          
          type="date"
          className="mt-1 block px-3 py-2 border-none shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-2xl h-10 bg-gray-500 w-96 mb-4"
          />
        </div>
        {/* <button onClick={saveTransaction} className="bg-cyan-900 text-white px-4 py-2 rounded-2xl mr-2">Save Transaction</button>
        <button onClick={checkBalance} className="bg-cyan-900 text-white px-4 py-2 rounded-2xl">Check Balance</button> */}
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


// import React, { useState } from 'react';

// const AddTransaction = ({ categories, addTransaction }) => {
//   const [category, setCategory] = useState('');
//   const [amount, setAmount] = useState('');
//   const [description, setDescription] = useState('');

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addTransaction({ category, amount, description });
//     setCategory('');
//     setAmount('');
//     setDescription('');
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="p-4">
//           <h1 className="text-2xl font-semibold mb-4">Add New Transaction</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
//               <select
//                 id="category"
//                 name="category"
//                 value={category}
//                 onChange={handleCategoryChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select a category</option>
//                 {categories.map((category) => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
//               <input
//                 type="number"
//                 id="amount"
//                 name="amount"
//                 value={amount}
//                 onChange={handleAmountChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
//               <input
//                 type="text"
//                 id="description"
//                 name="description"
//                 value={description}
//                 onChange={handleDescriptionChange}
//                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//             <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md">Add Transaction</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddTransaction;
