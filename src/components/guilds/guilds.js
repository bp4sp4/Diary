import Guildsdata from "./guilds.json";
import React, { useEffect, useState } from "react";
import styles from "./guilds.module.css";
import ColorSchemesExample from "../nav/nav";
import Footer from "../footer/footer";

function Guilds() {
  const [guildsData, setGuildsData] = useState([]);

  useEffect(() => {
    setGuildsData(Guildsdata);
  }, []);

  return (
    <div>
      <ColorSchemesExample />
      <div className={styles.main}>
        <h1 className={styles.guild__title}>Guilds Ranking</h1>
        <ul>
          <li className={styles.subtit}>
            <span className={styles.subtit__name}>길드명</span>
            <span className={styles.subtit__mastername}>마스터</span>
            <span className={styles.subtit__membercount}>인원</span>
          </li>
          {guildsData.map((guild) => (
            <li className={styles.guildsList} key={guild.Rank}>
              <span className={styles.guild__item}>{guild.Rank}</span>
              <span className={styles.guild__item__name}>
                {guild.GuildName}
              </span>
              <span className={styles.guild__item__mastername}>
                {guild.MasterName}
              </span>
              <span className={styles.guild__item__membercount}>
                {guild.MemberCount}
              </span>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
}

export default Guilds;
