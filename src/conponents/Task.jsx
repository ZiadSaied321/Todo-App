const Task = ({ task, onToggleComplete, onDelete }) => {
  return (
    <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm transition duration-200 ease-in-out hover:shadow-md">
      {/* Checkbox and Task Text */}
      <div>
        <div className="flex items-center flex-grow">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => {
              onToggleComplete(task.id);
            }}
            className="form-checkbox h-5 w-5 text-blue-600 rounded-md cursor-pointer focus:ring-blue-500 transition duration-150 ease-in-out"
          />
          <span
            className={`ml-4 text-lg font-medium ${
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {task.task}
          </span>
          <span
            className={`ml-4 text-lg font-medium ${
              task.completed ? "line-through text-gray-300" : "text-gray-400"
            }`}
          >
            {task.category}
          </span>
        </div>
        <div>
          <p className="text-l text-gray-500 text-center m-auto">
            {task.dueDate}
          </p>
        </div>
      </div>

      {/* Delete Icon (using a simple SVG for demonstration) */}
      <button
        onClick={() => onDelete(task.id)}
        className="ml-4 p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
        aria-label="Delete task"
      >
        {/* SVG for a trash/delete icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
