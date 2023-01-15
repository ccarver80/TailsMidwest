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
      <lable>{lable}</lable>
      <input
        {...register(`${name}`)}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
      />
    </div>
  );
}
