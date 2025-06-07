'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../styles/Activity.module.css';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Activity() {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    fetch('/activity.json') // Загружаем JSON-файл из public
      .then((res) => res.json())
      .then((data) => setActivityData(data.activities))
      .catch((err) => console.error('JSON Loading error:', err));
  }, []);

  return (
    <>
      <div className="container">
        <h1>Activity</h1>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={false}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {activityData.map((activity, index) => (
            <SwiperSlide key={index}>
              <div className={`${styles.box} d-flex flex-between`}>
                <div className={styles.content}>
                  <div>
                    <Image
                      src={activity.image}
                      alt={activity.alt || 'Activity'}
                      width={960}
                      height={1568}
                      className={styles.image}
                    />
                  </div>
                  <div className={`${styles.description} f-col`}>
                    <h3>{activity.title}</h3>
                    <p>{activity.description}</p>
                    <button className="hollow-button">See details</button>
                  </div>
                </div>
                {activity.info && (
                  <div className={`${styles.content} f-col`}>
                    {activity.info.map(([icon, title, desc], i) => (
                      <div key={i}>
                        <Image
                          src={icon}
                          alt={title}
                          width={512}
                          height={512}
                          className={styles.activityIcon}
                        />
                        <div className={`${styles.info} f-col`}>
                          <h4>{title}</h4>
                          <p>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
