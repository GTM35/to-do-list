import styles from "./style.module.css";

export function Empty() {
  return (
    <div className={styles.emptyContainer}>
      <img src="/empty.svg" alt="Imagem de task vazia" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
