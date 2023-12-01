import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: uuid(),
    title: 'Book the ticket for today evening',
  },
  {
    id: uuid(),
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: uuid(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: uuid(),
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: uuid(),
    title: 'Order fruits on Big Basket',
  },
  {
    id: uuid(),
    title: 'Fix the production issue',
  },
  {
    id: uuid(),
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: uuid(),
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoDetailsList: initialTodosList,
    taskTitle: '',
    id: '',
    editTitle: '',
    checked: false,
  }

  ondeleteIcon = id => {
    const {todoDetailsList} = this.state
    const filteredList = todoDetailsList.filter(each => each.id !== id)
    this.setState({todoDetailsList: filteredList})
  }

  onInputEvent = event => {
    const task = event.target.value
    this.setState({taskTitle: task})
  }

  onSubmitLimit = event => {
    event.preventDefault()
    const {todoDetailsList, taskTitle, checked} = this.state
    const convertedArray = taskTitle.split(' ')
    const checkLength = convertedArray.length
    const checkLastItem = convertedArray.pop()
    const numberOfItems = parseInt(checkLastItem, 10)

    if (Number.isNaN(numberOfItems)) {
      this.setState(prev => ({
        todoDetailsList: [
          ...prev.todoDetailsList,
          {id: uuid(), title: taskTitle, checked},
        ],
        taskTitle: '',
      }))
    } else {
      const title = convertedArray.join(' ')
      const newTodos = Array.from({length: numberOfItems}, () => ({
        id: uuid(),
        title,
        checked: false,
      }))

      this.setState(prev => ({
        todoDetailsList: [...prev.todoDetailsList, ...newTodos],
        taskTitle: '',
      }))
    }
  }

  onEditBtn = valueId => {
    const {todoDetailsList} = this.state
    const filtered = todoDetailsList.find(each => each.id === valueId)
    const {title, id} = filtered
    this.setState({
      editTitle: title,
      id,
    })
  }

  onSaveEdited = () => {
    const {todoDetailsList, editTitle, id} = this.state
    const listedDetails = todoDetailsList.map(each =>
      each.id === id ? {...each, title: editTitle} : each,
    )
    this.setState({todoDetailsList: listedDetails, id: ''})
  }

  onInputEdit = value => {
    this.setState({
      editTitle: value,
    })
  }

  onCheckMark = val => {
    const {todoDetailsList} = this.state
    this.setState({
      todoDetailsList: todoDetailsList.map(each =>
        each.id === val ? {...each, checked: !each.checked} : each,
      ),
    })
  }

  render() {
    const {todoDetailsList, taskTitle, id, editTitle, onCheck} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <form className="form-ele">
            <input
              type="text"
              placeholder="Enter the Text"
              className="input-type"
              onChange={this.onInputEvent}
              value={taskTitle}
            />
            <button
              type="button"
              className="button-add"
              onClick={this.onSubmitLimit}
            >
              Add
            </button>
          </form>
          <h1 className="heading">Todo List</h1>
          <ul className="ul-list-container">
            {todoDetailsList.map(eachItem => (
              <TodoItem
                eachItem={eachItem}
                isEdit={eachItem.id === id}
                key={eachItem.id}
                deleteList={this.ondeleteIcon}
                onEditBtn={this.onEditBtn}
                onSaveEdited={this.onSaveEdited}
                editTitle={editTitle}
                onChangeBtn={this.onInputEdit}
                onCheckList={this.onCheckMark}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
