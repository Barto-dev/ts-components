import React from 'react';
import styles from './Stepper2.module.css';

const Stepper2 = () => {
  return (
    <ol className={styles.stepper}>
      <li className={styles.item}>
        <h3 className={styles.title}>Step 1</h3>
      </li>

      <li className={styles.item}>
        <h3 className={styles.title}>Step 2</h3>
      </li>

      <li className={styles.item}>
        <h3 className={styles.title}>Step 3</h3>
      </li>
    </ol>
  );
};

export default Stepper2;
