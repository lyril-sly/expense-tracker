import React from 'react'

export const Dash= () => {
  return (
    <div className='flex flex-col py-12 px-14'>
        <h2>Dashbord</h2>
        <div className='flex space-x-8'>
         <div className='w-2/5 h-96 border border-gray-500 rounded flex justify-center p-4'>
          <span>Ama Ghana</span>
          <span className='text-gray-500'>Your Balance</span>
         </div>
         <div className='w-2/5 h-96 border border-gray-500 rounded flex justify-center p-4'>
          <span>Expense Chart</span>
          <span className='text-gray-500'>Your Expenses:</span>
         </div>
        </div>
        <div className='flex space-x-8'>
         <div className='w-2/5 h-96 border border-gray-500 rounded flex justify-center p-4'>
          <span>Your Activty</span>
          <span className='text-gray-500'>Your Balance</span>
          <li>You sent 500 to kofi</li>
         </div>
         <div className='w-2/5 h-96 border border-gray-500 rounded flex justify-center p-4'>
          <span>Pending Bill</span>
          <span className='text-gray-500'>Your Expenses:</span>
         </div>
        </div>
    </div>
  )
}
