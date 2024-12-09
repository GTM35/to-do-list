import React from "react";
import styles from "./styles.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, ...rest }: Props): JSX.Element {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
