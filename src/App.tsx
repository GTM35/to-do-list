import { Header } from "./Components/Header";

import "./global.css";
import styles from "./App.module.css";
import { Button } from "./Components/Button";
import { PlusCircle } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <Header />

      <div className={styles.containerNewTask}>
        <form className={styles.formContainer}>
          <input
            className={styles.inputTask}
            type="text"
            placeholder="Adicione uma nova tarefa"
            required
          />
          <Button>
            Criar
            <PlusCircle size={16} weight="bold" />
          </Button>
        </form>
      </div>
    </>
  );
}

export default App;
