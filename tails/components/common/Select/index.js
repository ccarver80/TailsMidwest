import React from "react";
import styles from "./styles.module.css";

export const Select = ({ name, options, label, register }) => {
  return (
    <div className={styles.select}>
      <label>{label}</label>
      <select name={name} {...register(`${name}`)}>
        {options.map((opt) => (
          <option value={opt.value}>{opt.name}</option>
        ))}
      </select>
    </div>
  );
};
