import "swiper/css";
import "swiper/css/navigation";
import React, { useState, useEffect } from "react";
import styles from "./charaters.module.css";
import ColorSchemesExample from "../nav/nav";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Events from "../events/events";
import Dungeons from "../dungeons/dungeons";
import Characters from "./Characters.json";
import "./style.css";
import Dungeon from "../dungeons/dungeons";
import DungeonsComponent from "../dungeons/dungeons";

function Character() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    setCharacterData(Characters);
  }, []);

  return (
    <>
      <div className={styles.wrap}>
        <ColorSchemesExample />
        <div className={styles.main}>
          <h3 className={styles.header}>보유캐릭터</h3>
          <div className={styles.lost_wrap}>
            <Swiper
              autoplay={{
                delay: 3000, // set the delay in milliseconds
                disableOnInteraction: false, // allow autoplay to continue after user interactions
              }}
              loop={true}
              pagination={{
                type: "fraction",
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {characterData.map((character, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.characterCard}>
                    <img
                      src={character.CharacterImage}
                      alt={`Character : ${index}`}
                      className={styles.characterImage}
                    />
                    <div className={styles.classinfo}>
                      <p>서버 : {character.ServerName}</p>
                      <p>클래스 : {character.CharacterClassName}</p>
                      <p>아이템 : {character.ItemAvgLevel}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <DungeonsComponent />
          <Events />
        </div>
      </div>
    </>
  );
}

export default Character;
