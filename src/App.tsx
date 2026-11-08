import { useEffect, useState } from "react"
import TaskList from "./components/TaskList"
import AddForm from "./components/AddForm";
import { fetchTodos } from "./api/todos.api";

export type Task = {
  id: string;
  title: string;
  done: boolean;
};

function App() {

  const defaultTasks: Task[] = [
    { id: '1', title: 'Task 1', done: true },
    { id: '2', title: 'Task 2', done: false },
    { id: '3', title: 'Task 3', done: false },
  ]

  const [tasks, setTasks] = useState<Task[]>(defaultTasks)
  const [count, setCount] = useState<number>(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const addNewTask = (title: string) => {
    const addTask = {
      id: crypto.randomUUID(),
      title: title,
      done: false
    }
    setTasks([...tasks, addTask])
  }

  const removeTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)
    setTasks(filteredTasks)
  }


  useEffect(() => {
    async function load() {
      setStatus('loading');
      try {
        const items = await fetchTodos();
        setTasks(items);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    }
    load();
  }, []);

  const changeTasks = (id: string) => {
    const changedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(changedTasks)
  }


  return (
    <div className="main">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <AddForm addNewTask={addNewTask} />
      {status === 'loading' && <h2>Loading ...</h2>}
      {status === 'success' &&
        <TaskList
          tasks={tasks}
          changeTask={changeTasks}
          removeTask={removeTask}
        />
      }


    </div>
  )
}

export default App
