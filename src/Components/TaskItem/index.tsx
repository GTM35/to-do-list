import { Check, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { ITask } from "../../App";

type Props = {
  data: ITask;
};

export function TaskItem({ data }: Props) {
  console.log(data.id);
  return (
    <>
      <div className={styles.TaskItemContainer}>
        <div>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="checkbox"
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
