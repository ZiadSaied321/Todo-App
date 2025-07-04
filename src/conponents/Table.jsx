import { useState } from "react";
import Task from "./Task";

const Table = () => {
  const [filter, setFilter] = useState("all");
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React basics", completed: false },
    { id: 2, text: "Style with Tailwind CSS", completed: true },
    { id: 3, text: "Build a simple To-Do App", completed: false },
  ]);

  console.log(filter);
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
          onClick={() => setFilter("doing")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mr-3 rounded-lg text-lg"
        >
          Doing
        </button>
        <button
          onClick={() => setFilter("done")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 mr-3 rounded-lg text-lg"
        >
          Done
        </button>
      </div>
      <div className="mt-3 flex flex-col gap-1">
        {...tasks.map((task) => {
          return (
            <Task task={task} onToggleComplete={() => ""} onDelete={() => ""} />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
