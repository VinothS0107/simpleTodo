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

  const onEditClick = () => {
    onEditBtn(id)
  }
  const onSaveEditedClick = () => {
    onSaveEdited()
  }

  const onChangeBtnClick = event => {
    const target = event.target.value
    onChangeBtn(target)
  }

  const onCheck = () => {
    onCheckList(id)
  }

  return (
    <li className="list-container">
      {isEdit === true ? (
        <input
          type="text"
          placeholder="Enter the Text"
          className="input-type-Separate"
          onChange={onChangeBtnClick}
          value={editTitle}
        />
      ) : (
        <div className="task_container">
          <input type="checkbox" onClick={onCheck} />
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
        {isEdit === true ? (
          <button
            type="button"
            className="button-class"
            onClick={onSaveEditedClick}
          >
            Save
          </button>
        ) : (
          <button type="button" className="button-class" onClick={onEditClick}>
            Edit
          </button>
        )}
        <button className="delete-btn" type="button" onClick={onDeleteList}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
