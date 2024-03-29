import React, { useState, useEffect } from "react";
import dungeonsData from "./dungeons.json"; // Rename the import
import styles from "./dungenons.module.css";
import { Tooltip } from "@chakra-ui/react";

function DungeonsComponent() {
  const [dungeons, setDungeons] = useState([]);

  useEffect(() => {
    setDungeons(dungeonsData); // Update state variable name
  }, []);

  return (
    <>
      <h2 className={styles.main__title}>금주 던전</h2>
      <div className={styles.main}>
        {dungeons.map((dungeon, index) => (
          <ul className={styles.main__contents} key={index}>
            <li>
              <span className={styles.main__contents__item__name}>
                {dungeon.Name}
              </span>
              <img
                className={styles.main_content_img}
                src={dungeon.Image}
              ></img>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default DungeonsComponent; // Export the renamed component
