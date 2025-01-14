import styles from "./styles.module.css";

export function HeaderTasks() {
  return (
    <header className={styles.headerContainer}>
      <aside className={styles.tasksCreated}>
        <p>Tarefas criadas</p>
        <span className={styles.counter}>5</span>
      </aside>
      <aside className={styles.tasksDone}>
        <p>Concluídas</p>
        <span className={styles.counter}>5</span>
      </aside>
    </header>
  );
}
