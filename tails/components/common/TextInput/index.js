import React from "react";
import styles from "./styles.module.css";

export default function TextInput({
  lable,
  register,
  name,
  type,
  placeholder,
  pattern,
}) {
  return (
    <div className={styles.TextInput}>
      <label>{lable}</label>
      <input
        {...register(`${name}`)}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
}
