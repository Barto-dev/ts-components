import React from 'react';

import styles from './VerticalStepper.module.css';

const VerticalStepper = () => {
  return (
    <ol className={styles.stepper}>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 1</h3>
          <p className={styles.desc}>Personal info</p>
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 2</h3>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut, eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium provident consequuntur eaque</p>
        </div>
      </li>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 3</h3>
          <p className={styles.desc}>Review</p>
        </div>
      </li>
    </ol>
  );
};

export default VerticalStepper;
