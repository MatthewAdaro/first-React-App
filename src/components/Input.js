import React from "react";
import { useState } from "react"
import styles from "../css/styles.module.css";

function Input() {
    const [first_Int, setFirst_Int] = useState(0);
    const [second_Int, setSecond_Int] = useState(0);
    const [sum, setSum] = useState(0);

    const clear = () => {
        setFirst_Int("");
        setSecond_Int("");
        setSum(0);
    }

    const add_value = () => setSum(first_Int + second_Int);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1> ReactJS Add Number</h1>
        <input type="text" id = "first_Int" placeholder="Enter first integer" value = {first_Int} onChange = {(e) => setFirst_Int(parseInt(e.target.value))}  />
        <input type="text" id = "second_Int"  placeholder="Enter second integer" value = {second_Int} onChange = {(e) => setSecond_Int(parseInt(e.target.value))}/>
        <button id = {styles.btn_primary} onClick = {add_value} type = "button">Add</button>
        <button id = {styles.btn_secondary} onClick = {clear}>Clear</button>
        <p>{sum}</p>
      </div>
    </div>
  );
}

export default Input;
