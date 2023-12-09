import './index.css'

const TodoItem = props => {
  const {
    eachItem,
    deleteList,
    onEditBtn,
    isEdit,
    onSaveEdited,
    editTitle,
    onChangeBtn,
    onCheckList,
  } = props

  const {title, id, checked} = eachItem

  const onDeleteList = () => {
    deleteList(id)
  }

  const onEditClick = valueId => {
    onEditBtn(valueId)
  }
  const onSaveEditedClick = valueId => {
    onSaveEdited(valueId)
  }

  const onChangeBtnClick = event => {
    // const target = event.target.value
    onChangeBtn(event)
  }

  const onCheck = value => {
    onCheckList(value)
  }

  return (
    <li className="list-container">
      {isEdit === true ? (
        <input
          type="text"
          placeholder="Enter the Text"
          className="input-type-Separate"
          onChange={onChangeBtnClick}
          value={editTitle.title}
        />
      ) : (
        <div className="task_container">
          <input
            type="checkbox"
            onClick={() => onCheck(id)}
            defaultChecked={checked}
          />
          <p
            className={
              checked === true ? 'list-para-style-marked' : 'list-para-style'
            }
          >
            {title}
          </p>
        </div>
      )}
      <div className="button-container">
        <button
          type="button"
          className="button-class"
          onClick={
            isEdit === true
              ? () => onSaveEditedClick(id)
              : () => onEditClick(id)
          }
        >
          {isEdit === true ? 'Save' : 'Edit'}
        </button>
        <button className="delete-btn" type="button" onClick={onDeleteList}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
