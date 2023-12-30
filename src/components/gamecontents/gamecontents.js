import { useEffect, useState } from "react";
import ColorSchemesExample from "../nav/nav";
import styles from "./gamecontents.module.css";

function Gamecontents() {
  const [gamecontentsData, setGameContentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../dunjeon.json");
        const data = await response.json();
        setGameContentsData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <ColorSchemesExample />
      <div className={styles.main}>
        <h1 className={styles.header}>
          게임콘텐츠
          <span className={styles.subheader}>
            *던전을 누르면 보상 목록이 나타납니다.(미완성)
          </span>
        </h1>
        {gamecontentsData.map((gamecon, index) => (
          <div className={styles.areawrap}>
            <div key={index} className={styles.areaname}></div>
            <img
              src={gamecon.Image}
              alt={`dunjeonImage : ${index}`}
              className={gamecon.dunimage}
            />
            <div>
              <span>이름 : {gamecon.Name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gamecontents;
