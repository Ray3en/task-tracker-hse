
type TaskItemProps = {
  title: string
  id: string
  done: boolean
  changeTask: (id: string) => void
  removeTask: (id: string) => void
}


function TaskItem({ id, title, done, changeTask, removeTask }: TaskItemProps) {

  const handleChangeTask = () => {
    changeTask(id)
  }

  const handleRemoveTask = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    removeTask(id)
  }

  return (
    <div
      onClick={handleChangeTask}
      className="task-item"
      style={{ backgroundColor: done ? 'green' : 'red' }}
    >
      <h2>{title}</h2>
      <button onClick={handleRemoveTask}>X</button>
    </div>
  )
}

export default TaskItem



