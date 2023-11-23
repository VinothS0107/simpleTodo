// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachItem, deleteList} = props
  const {title, id} = eachItem
  const onDeleteList = () => {
    deleteList(id)
  }
  return (
    <li className="list-container">
      <p className="list-para-style">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteList}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
