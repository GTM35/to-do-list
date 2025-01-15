import { Check, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { ITask } from "../../App";

type Props = {
  data: ITask;
  toggleChecked: ({ id, value }: { id: number; value: boolean }) => void;
};

export function TaskItem({ data, toggleChecked }: Props) {
  function handleToggleChecked() {
    toggleChecked({ id: data.id, value: !data.isChecked });
  }

  return (
    <>
      <div className={styles.TaskItemContainer}>
        <div>
          <label htmlFor={`checkbox-${data.id}`}>
            <input
              type="checkbox"
              name="checkbox"
              id={`checkbox-${data.id}`}
              className="checkbox"
              onChange={handleToggleChecked}
              checked={data.isChecked}
            />

            <span className={data.isChecked ? styles.check : styles.uncheck}>
              <Check size={12} color="#0063BF" weight="bold" />
            </span>

            <p
              className={
                data.isChecked ? styles.textChecked : styles.textUnchecked
              }
            >
              {data.text}
            </p>
          </label>
        </div>
        <button>
          <Trash size={16} color="#808080" />
        </button>
      </div>
    </>
  );
}
