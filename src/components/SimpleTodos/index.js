import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: uuid(),
    title: 'Book the ticket for today evening',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Rent the movie for tomorrow movie night',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Drop the parcel at Bloomingdale',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Order fruits on Big Basket',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Fix the production issue',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Confirm my slot for Saturday Night',
    checked: false,
  },
  {
    id: uuid(),
    title: 'Get essentials for Sunday car wash',
    checked: false,
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {
    todoDetailsList: initialTodosList,
    taskTitle: '',
    edit: '',
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
    const {taskTitle} = this.state
    const convertedArray = taskTitle.split(' ')
    const checkLastItem = convertedArray.pop()
    const numberOfItems = parseInt(checkLastItem, 10)

    if (Number.isNaN(numberOfItems)) {
      this.setState(prev => ({
        todoDetailsList: [
          ...prev.todoDetailsList,
          {id: uuid(), title: taskTitle, checked: false},
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

    this.setState({
      edit: filtered,
    })
  }

  onSaveEdited = id => {
    const {todoDetailsList, edit} = this.state
    const listedDetails = todoDetailsList.map(each =>
      each.id === id ? {...each, ...edit, id: uuid()} : each,
    )

    this.setState({todoDetailsList: listedDetails})
  }

  onEditInput = event => {
    const {edit} = this.state
    const editedInput = event.target.value
    const final = {...edit, title: editedInput}
    this.setState({edit: final})
  }

  onCheckMark = id => {
    const {todoDetailsList} = this.state
    this.setState({
      todoDetailsList: todoDetailsList.map(each =>
        each.id === id ? {...each, checked: !each.checked} : each,
      ),
    })
  }

  render() {
    const {todoDetailsList, taskTitle, edit} = this.state
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
                isEdit={eachItem.id === edit.id}
                key={eachItem.id}
                deleteList={this.ondeleteIcon}
                onEditBtn={this.onEditBtn}
                onSaveEdited={this.onSaveEdited}
                editTitle={edit}
                onChangeBtn={this.onEditInput}
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
