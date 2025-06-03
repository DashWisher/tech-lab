import styles from '../styles/Activity.module.css';

export default function Activity() {
  return (
    <>
      <div className={styles.activity}>
        <div className={styles.box}></div>
      </div>
      <div className={styles.activity}>
        <div className={styles.box}></div>
      </div>
      <div className={styles.activity}>
        <div className={styles.box}></div>
      </div>
    </>
  );
}
