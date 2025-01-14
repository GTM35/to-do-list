import { Header } from "./Components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Button } from "./Components/Button";
import { PlusCircle } from "@phosphor-icons/react";
import { HeaderTasks } from "./Components/HeaderTasks";
import { TaskItem } from "./Components/TaskItem";
import { useState } from "react";

export interface ITask {
  id: number;
  text: string;
  isChecked: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const tasksCheckedCounter = tasks.reduce((prev, cur) => {
    if (cur.isChecked) {
      return prev + 1;
    }

    return prev;
  }, 0);

  function handleAddTask() {
    if (inputValue !== "") {
      const newTask: ITask = {
        id: new Date().getTime(),
        text: inputValue,
        isChecked: true,
      };

      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  }

  return (
    <>
      <Header />

      <main>
        <div className={styles.containerNewTask}>
          <form className={styles.formContainer}>
            <input
              className={styles.inputTask}
              type="text"
              placeholder="Adicione uma nova tarefa"
              required
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleAddTask();
              }}
            >
              Criar
              <PlusCircle size={16} weight="bold" />
            </Button>
          </form>
        </div>

        <section className={styles.ListTasksContainer}>
          <HeaderTasks
            tasksCounter={tasks.length}
            tasksChecked={tasksCheckedCounter}
          />

          <div className={styles.listTasks}>
            {tasks.map((task) => (
              <TaskItem key={task.id} data={task} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
