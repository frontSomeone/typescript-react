import React, { useState } from "react"
import "./App.css"

function App() {
  interface Task {
    id: number

    text: string

    completed: boolean
  }
  const [currentProduct, setCurrentProduct] = useState<Task | null>(null)
  const [text, setText] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Задача 1", completed: false },
  ])

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
        {tasks.map((task) => (
          <div className="tasks">
            <p>{task.id}</p>
            <p>{task.text}</p>
            <div>
              <p>{task.completed ? "Выполнено" : "Не выполнено"}</p>
              <input
                onClick={() => {
                  setCurrentProduct(task)
                  setTasks((currentProduct) =>
                    currentProduct.map((item) =>
                      item.completed === false
                        ? { ...item, completed: true }
                        : { ...item, completed: false }
                    )
                  )
                }}
                className="checkbox"
                type="checkbox"
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
