import type { Task } from "../App"
import TaskItem from "./TaskItem"

type TaskListProps = {
    tasks: Task[]
    changeTask: (id: string) => void
    removeTask: (id: string) => void
}

function TaskList({ tasks, changeTask, removeTask }: TaskListProps) {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    done={task.done}
                    removeTask={removeTask}
                    changeTask={changeTask}
                />
            ))}
        </div>
    )
}

export default TaskList