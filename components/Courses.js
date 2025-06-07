'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import styles from '../styles/Courses.module.css';

export default function Courses() {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    fetch('/Courses.json')
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error('Loading error :', err));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Courses</h1>
        <div className={`${styles.slider} d-flex`}>
          <div
            className={`${styles.cards} `}
            style={{
              '--quantity': data.quantity,
              '--time': data.time,
              '--width': '400px',
            }}
          >
            {data?.cards?.length ? (
              data.cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.card} f-col`}
                  style={{ '--position': index + 1 }}
                >
                  <Image
                    src={card.image}
                    alt={card.alt || 'Course Image'}
                    width={960}
                    height={1568}
                    className={styles.image}
                  />
                  <div className={`${styles.content} f-col`}>
                    <div className="f-col">
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                    </div>
                    <button className="fill-button d-flex">Get started</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Data not loaded or missing.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
