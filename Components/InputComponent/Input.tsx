import React from "react";
import styles from "../../styles/input.module.css";
interface Props {
  type: string;
  placeholder: string;
}
const Input = ({ type, placeholder }: Props) => {
  return (
    <div className={styles.inputcon}>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
