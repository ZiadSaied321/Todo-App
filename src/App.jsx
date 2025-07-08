import Form from "./conponents/Form"
import Table from "./conponents/Table"
import useLocalStorage from "./CustomHocks/useLocalStorage"

const App = () => {
  const [todos , setTodos] = useLocalStorage("tasks",[])
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col">
        <Form todos={todos} setTodos={setTodos}/>
      <Table tasks={todos} setTasks={setTodos} />
      </div>
    </div>
  )
}

export default App
