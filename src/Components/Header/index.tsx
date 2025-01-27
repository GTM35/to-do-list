import styles from "./style.module.css";
import image from "/Logo.svg";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={image} alt="Logo ToDo" />
    </header>
  );
}
