import Form from "./conponents/Form"
import Table from "./conponents/Table"


const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col">
        <Form/>
      <Table/>
      </div>
    </div>
  )
}

export default App
