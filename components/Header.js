import Image from 'next/image';
import styles from '../styles/Header.module.css';
import headerBG from '../public/headerbackground.jpg';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1>
          TechLab <br /> Robotics and Learning
        </h1>
        <p>
          Innovative robotics, AI-driven automation, and engineering training to
          optimize industrial systems and empower future engineers with
          practical skills.
        </p>
        <button className="fill-button">Book now</button>
      </div>
      <div className={styles.backgroundWrapper}>
        <Image
          src={headerBG}
          alt="Header Background"
          className={styles.backgroundImage}
          priority
        />
      </div>
    </div>
  );
}
