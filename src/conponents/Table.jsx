import { useState } from "react";
import Task from "./Task";

const Table = ({ tasks, setTasks }) => {
  const [filter, setFilter] = useState("all");

  const deleteTask = (id) => {
    setTasks((tasks) => {
      return tasks.filter((item) => item.id !== id);
    });
  };
  const checkTask = (id) => {
    setTasks((tasks) => {
      return tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
    });
  };

  const viewTasks= () =>{
    if(filter === "done"){
      return tasks.filter((task)=>task.completed===true)
    }
    return tasks
  }

  return (
    <div>
      <div className="h-px mt-8 mb-2 bg-black"></div>
      <div>
        <button
          onClick={() => setFilter("All")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mr-3 rounded-lg text-lg"
        >
          All
        </button>
        <button
          onClick={() => setFilter("done")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mr-3 rounded-lg text-lg"
        >
          Done
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {tasks.length === 0 ? (
          <div className="m-auto">
            <p className="text-xl text-center font-semibold text-gray-400">No tasks yet</p>
            <p className="text-md text-gray-400">Add one to get started!</p>
          </div>
        ) : (
          <div>
            {...viewTasks().map((task) => {
              return (
                <Task
                  task={task}
                  onToggleComplete={checkTask}
                  onDelete={deleteTask}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
