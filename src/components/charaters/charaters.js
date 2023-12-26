import React, { useState, useEffect } from "react";
import styles from "./charaters.module.css";
import ColorSchemesExample from "../nav/nav";

function Character() {
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bp4sp4.github.io/LostArk-Open-API/Characters.json"
        );
        const data = await response.json();
        console.log(data); // Check the data in the console
        setCharacterData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <ColorSchemesExample />
      <h1 className={styles.header}>나의캐릭터들</h1>
      <div className={styles.lost_wrap}>
        <div className={styles.lost_charater}>
          {characterData.map((character, index) => (
            <div key={index} className={styles.characterCard}>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Character;
