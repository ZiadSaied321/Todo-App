import React from 'react'

const Form = () => {
  return (
    <form>
        <label htmlFor="task">Task</label>
        <input id='task' type="text" />

        <label htmlFor="taskLabel">Category</label>
        <input id='taskLabel' type="text" />

        <input type="date" />
        <input type="subnit" />
    </form>
  )
}

export default Form