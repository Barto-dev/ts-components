import React from 'react';

import styles from './Stepper.module.css';

const Stepper = (): JSX.Element => {
  return (
    <ol className={styles.stepper}>

      <li className={styles.item}>
        <h3 className={styles.title}>Step 1</h3>
        <p className={styles.desc}>Personal info</p>
      </li>

      <li className={styles.item}>
        <h3 className={styles.title}>Step 2</h3>
        <p className={styles.desc}>Education</p>
      </li>

      <li className={styles.item}>
        <h3 className={styles.title}>Step 3</h3>
        <p className={styles.desc}>Review</p>
      </li>
    </ol>
  );
};

export default Stepper;
