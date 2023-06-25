import { useState } from "react"
import "./styles.css"
const App = () => {
  const [newItem, setNewItem] = useState("Tawab");
  const [todos, setTodos] = useState([]);
  const ok = "Tawab";
  console.log(ok.toLowerCase())

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos])
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item"> New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" id="" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App