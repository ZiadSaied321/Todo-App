import { useState } from "react";
import { uid } from "uid";
const Form = ({todos , setTodos}) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setTodos(()=> [...todos,{task, category,dueDate, completed: false, id: uid()}]) 

    setTask("")
    setCategory("")
    setDueDate("")
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-6 md:space-y-0">
        <div className="flex-1">
          <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
            Task
          </label>
          <input
            id="task"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="e.g., Buy groceries"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="flex-1"> 
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Personal, Work, Shopping"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="flex-1"> 
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700 mb-1">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            required
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        >
          Add Task
        </button>
      </div>
      </form>
  )
}

export default Form