import React from "react";
import styles from "../../styles/buttton.module.css";
interface Props {
  text: string;
  classname: string;
}
const Button = ({ text, classname }: Props) => {
  return (
    <div>
      <button className={styles[classname]}>{text}</button>
    </div>
  );
};

export default Button;
