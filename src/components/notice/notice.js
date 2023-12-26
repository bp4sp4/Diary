import React, { useEffect, useState } from "react";
import styles from "./notice.module.css";
import ColorSchemesExample from "../nav/nav";

function Motice() {
  const [noticeData, setNoticeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../notice.json");
        const data = await response.json();
        console.log(data); // Check the data in the console
        setNoticeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <ColorSchemesExample />
      <div className={styles.noticemain}>
        <h1 className={styles.header}>공지사항</h1>
        <div className={styles.lost_wrap}>
          <div className={styles.lost_charater}>
            {noticeData.map((notice, index) => (
              <div key={index} className={styles.characterCard}>
                <div className={styles.classinfo}>
                  <p>제목 : {notice.Title}</p>
                  <p>작성날짜 : {notice.Date}</p>
                  <p>링크 : {notice.Link}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Motice;
