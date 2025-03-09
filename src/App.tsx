import { useState } from "react"
import "./App.css"

function App() {
  interface Task {
    id: number

    text: string

    completed: boolean
  }
  const [currentProduct, setCurrentProduct] = useState<Task | null>(null)
  const [text, setText] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div className="App">
      <div className="form">
        <div className="header">ToDo LIST</div>
        <div>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button
            onClick={() =>
              setTasks([...tasks, { id: 1, text: text, completed: false }])
            }
          >
            Добавить
          </button>
        </div>
        {tasks.map((task, taskId) => (
          <div key={taskId} className="tasks">
            <p>{taskId + 1}</p>
            <p>{task.text}</p>
            <div>
              <p>{task.completed ? "Выполнено" : "Не выполнено"}</p>
              <input
                onChange={() => {
                  setCurrentProduct(task)
                  setTasks((prevTasks) =>
                    prevTasks.map((item, i) =>
                      i === taskId
                        ? { ...item, completed: !item.completed }
                        : item
                    )
                  )
                }}
                className="checkbox"
                type="checkbox"
                checked={task.completed}
              />
              <button
                onClick={() => {
                  setTasks(tasks.filter((item) => item !== task))
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
