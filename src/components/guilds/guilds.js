import Guildsdata from "./guilds.json";
import React, { useEffect, useState } from "react";
import styles from "./guilds.module.css";

function Guilds() {
  const [guildsData, setGuildsData] = useState([]);

  useEffect(() => {
    setGuildsData(Guildsdata);
  }, []);

  return (
    <div className={styles.guildsContainer}>
      <h1>Guilds Ranking</h1>
      <ul className={styles.guildsList}>
        {guildsData.map((guild) => (
          <li key={guild.Rank}>
            <span>{guild.Rank}</span>
            <span>{guild.GuildName}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Guilds;
