import "swiper/css";
import "swiper/css/navigation";
import React, { useEffect, useState } from "react";
import Event from "./Events.json";
import styles from "./events.module.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Events() {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    setEventsData(Event);
  }, []);

  return (
    <>
      {eventsData.length > 0 ? (
        <div className={styles.main}>
          <h3 className={styles.main__title}>이벤트</h3>
          <Swiper
            autoplay={{
              delay: 3000, // set the delay in milliseconds
              disableOnInteraction: true, // allow autoplay to continue after user interactions
            }}
            loop={true}
            pagination={{
              type: "fraction",
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {eventsData.map((event, index) => (
              <SwiperSlide key={index}>
                <div className={styles.main}>
                  <div className={styles.main__event__wrap}>
                    <img
                      className={styles.main__event__img}
                      src={event.Thumbnail}
                      alt={event.Title}
                    />
                  </div>
                  <div className={styles.main__event__lorem__wrap}>
                    <h4 className={styles.main__event__font}>{event.Title}</h4>
                    <p className={styles.main__event__date}>
                      {event.StartDate} ~ {event.EndDate}
                    </p>
                    <a
                      className={styles.main__event__link}
                      href={event.Link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      더보기
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Events;
