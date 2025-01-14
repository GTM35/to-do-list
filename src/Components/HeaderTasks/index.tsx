import styles from "./styles.module.css";

type Props = {
  tasksCounter: number;
  tasksChecked: number;
};

export function HeaderTasks({ tasksChecked, tasksCounter }: Props) {
  return (
    <header className={styles.headerContainer}>
      <aside className={styles.tasksCreated}>
        <p>Tarefas criadas</p>
        <span className={styles.counter}>{tasksCounter}</span>
      </aside>
      <aside className={styles.tasksDone}>
        <p>Concluídas</p>
        <span className={styles.counter}>{tasksChecked}</span>
      </aside>
    </header>
  );
}
