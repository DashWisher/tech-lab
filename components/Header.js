import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={`container d-flex flex-between`}>
      <div className="f-col">
        <div className={`${styles.header}`}>
          <div className={styles.backgroundImage}></div>
          <div className={styles.content}>
            <h1>
              TechLab <br /> Robotics and Learning
            </h1>
            <p>
              Innovative robotics, AI-driven automation, and engineering
              training to optimize industrial systems and empower future
              engineers with practical skills.
            </p>
            <button className="fill-button">Book now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
