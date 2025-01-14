import { Check, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function TaskItem() {
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

            <span className={styles.check}>
              <Check size={12} color="#0063BF" weight="bold" />
            </span>

            <p className={styles.textChecked}>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
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
