import {Component} from 'react'
import {v4 as uuid} from 'uuid'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: uuid(),
    title: 'Book the ticket for today evening',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Rent the movie for tomorrow movie night',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Confirm the slot for the yoga session tomorrow morning',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Drop the parcel at Bloomingdale',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Order fruits on Big Basket',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Fix the production issue',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Confirm my slot for Saturday Night',
    checked: false,
    isEdit: false,
  },
  {
    id: uuid(),
    title: 'Get essentials for Sunday car wash',
    checked: false,
    isEdit: false,
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
          {id: uuid(), title: taskTitle, checked: false, isEdit: false},
        ],
        taskTitle: '',
      }))
    } else {
      const title = convertedArray.join(' ')
      const newTodos = Array.from({length: numberOfItems}, () => ({
        id: uuid(),
        title,
        checked: false,
        isEdit: false,
      }))

      this.setState(prev => ({
        todoDetailsList: [...prev.todoDetailsList, ...newTodos],
        taskTitle: '',
      }))
    }
  }

  onEditBtn = valueId => {
    const {todoDetailsList} = this.state
    const filtered = todoDetailsList.map(each => {
      if (each.id === valueId) {
        return {...each, isEdit: true}
      }
      return each
    })

    this.setState({todoDetailsList: filtered})
  }

  onSaveEdited = id => {
    console.log(id)
    const {todoDetailsList} = this.state
    const saveDetails = todoDetailsList.map(each => {
      if (each.id === id) {
        return {...each, isEdit: false}
      }
      return each
    })

    this.setState({todoDetailsList: saveDetails})
  }

  onEditInput = (event, id) => {
    const {todoDetailsList} = this.state
    const editedInput = event.target.value

    const filtered = todoDetailsList.map(each => {
      if (each.id === id) {
        return {...each, title: editedInput}
      }
      return each
    })
    this.setState({todoDetailsList: filtered})
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
