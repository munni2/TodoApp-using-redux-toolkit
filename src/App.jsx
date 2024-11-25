import React from 'react'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'

function App() {

  return (
    <>
    <div className='bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen flex items-center justify-center'>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-700 text-center mb-6">My To-Do List</h1>
        <AddTodo></AddTodo>
        <ListTodo></ListTodo>
      </div>
    </div>
  </>
  )
}

export default App
