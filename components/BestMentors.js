//'use client';
//import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '../styles/BestMentors.module.css';

export default function BestMentors() {
  /*const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    fetch('/mentors.json')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error('Loading error :', err));
  }, []);*/

  return (
    <>
      <div className="container">
        <h1>Best mentors</h1>
        <div className={`${styles.cards} d-flex flex-between`}>
          <div className={styles.card}>
            <div className={`${styles.content} f-col`}>
              <Image
                src={'/Mentors/image1.png'}
                alt={'Mentor Image'}
                width={400}
                height={400}
                className={styles.image}
              />
              <div>
                <h5>6+ years</h5>
                <div>
                  <h5>5</h5>
                  <Image
                    src={'/Star.png'}
                    alt={'Mentor Image'}
                    width={25}
                    height={24}
                    style={{ marginLeft: 10 }}
                  />
                </div>
              </div>
              <h4>Chris Osborne</h4>
              <div className={styles.tags}>
                <div className={styles.tag}>#AI-development</div>
                <div className={styles.tag}>#Robotics</div>
                <div className={styles.tag}>#Servers</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.content} f-col`}>
              <Image
                src={'/Mentors/image2.png'}
                alt={'Mentor Image'}
                width={400}
                height={400}
                className={styles.image}
              />
              <div>
                <h5>3+ years</h5>
                <div>
                  <h5>4.9</h5>
                  <Image
                    src={'/Star.png'}
                    alt={'Mentor Image'}
                    width={25}
                    height={24}
                    style={{ marginLeft: 10 }}
                  />
                </div>
              </div>
              <h4>Sophie Anders</h4>
              <div className={styles.tags}>
                <div className={styles.tag}>#AI-development</div>
                <div className={styles.tag}>#Microservices</div>
                <div className={styles.tag}>#Algorithmics</div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={`${styles.content} f-col`}>
              <Image
                src={'/Mentors/image3.png'}
                alt={'Mentor Image'}
                width={400}
                height={400}
                className={styles.image}
              />
              <div>
                <h5>8+ years</h5>
                <div>
                  <h5>4.7</h5>
                  <Image
                    src={'/Star.png'}
                    alt={'Mentor Image'}
                    width={25}
                    height={24}
                    style={{ marginLeft: 10 }}
                  />
                </div>
              </div>
              <h4>Bob Hammond</h4>
              <div className={styles.tags}>
                <div className={styles.tag}>#Robotics</div>
                <div className={styles.tag}>#Microchips</div>
                <div className={styles.tag}>#Algorithmics</div>
                <div className={styles.tag}>#Сomputer-vision</div>
                <div className={styles.tag}>#Sensor-fusion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
