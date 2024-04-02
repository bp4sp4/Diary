import Guildsdata from "./guilds.json";
import React, { useEffect, useState } from "react";
import styles from "./guilds.module.css";
import ColorSchemesExample from "../nav/nav";

function Guilds() {
  const [guildsData, setGuildsData] = useState([]);

  useEffect(() => {
    setGuildsData(Guildsdata);
  }, []);

  return (
    <div>
      <ColorSchemesExample />
      <h1>Guilds Ranking</h1>
      <div className={styles.main}>
        <ul className={styles.guildsList}>
          {guildsData.map((guild) => (
            <li key={guild.Rank}>
              <span>{guild.Rank}</span>
              <span>{guild.GuildName}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Guilds;
