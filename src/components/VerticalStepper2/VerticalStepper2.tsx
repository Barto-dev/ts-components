import React from 'react';

import styles from './VerticalStepper2.module.css';

const VerticalStepper2 = (): JSX.Element => {
  return (
    <ol className={styles.stepper}>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 1</h3>
          <p className={styles.desc}>Personal info</p>
        </div>
        <time className={styles.time}>10.03</time>
      </li>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 2</h3>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, doloremque ut,
            eius cum in repellat temporibus rem quod officia eligendi dolores necessitatibus at aperiam accusantium
            provident consequuntur eaque</p>
        </div>
        <time className={styles.time}>10.35</time>
      </li>

      <li className={styles.item}>
        <div className={styles.content}>
          <h3 className={styles.title}>Step 3</h3>
          <p className={styles.desc}>Review</p>
        </div>
        <time className={styles.time}>11.45</time>
      </li>

    </ol>
  );
};

export default VerticalStepper2;
