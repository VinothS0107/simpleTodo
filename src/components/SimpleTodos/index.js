import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoDetailsList: initialTodosList}

  ondeleteIcon = id => {
    const {todoDetailsList} = this.state
    const filteredList = todoDetailsList.filter(each => each.id !== id)
    this.setState({todoDetailsList: filteredList})
  }

  render() {
    const {todoDetailsList} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="ul-list-container">
            {todoDetailsList.map(eachItem => (
              <TodoItem
                eachItem={eachItem}
                key={eachItem.id}
                deleteList={this.ondeleteIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
