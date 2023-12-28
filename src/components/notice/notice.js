import React, { useEffect, useState } from "react";
import styles from "./notice.module.css";
import ColorSchemesExample from "../nav/nav";
import { Pagination } from "@mui/material";

function Motice() {
  const [noticeData, setNoticeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(10);
  const [selectedTab, setSelectedTab] = useState("전체"); // 초기값은 "전체"
  const [tabPages, setTabPages] = useState({
    전체: 1,
    공지: 1,
    점검: 1,
    상점: 1,
    이벤트: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../notice.json");
        const data = await response.json();
        setNoticeData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastNotice = tabPages[selectedTab] * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = noticeData
    .filter((notice) => selectedTab === "전체" || notice.Type === selectedTab)
    .slice(indexOfFirstNotice, indexOfLastNotice);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    setTabPages((prevPages) => ({ ...prevPages, [selectedTab]: newPage }));
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(tabPages[tab]);
  };

  return (
    <div className={styles.main}>
      <ColorSchemesExample />
      <div className={styles.noticemain}>
        <h1 className={styles.header}>공지사항</h1>
        <div className={styles.tabs}>
          <button
            className={styles.tabsbtn}
            onClick={() => handleTabChange("전체")}
          >
            전체
          </button>
          <button
            className={styles.tabsbtn}
            onClick={() => handleTabChange("공지")}
          >
            공지
          </button>
          <button
            className={styles.tabsbtn}
            onClick={() => handleTabChange("점검")}
          >
            점검
          </button>
          <button
            className={styles.tabsbtn}
            onClick={() => handleTabChange("상점")}
          >
            상점
          </button>
          <button
            className={styles.tabsbtn}
            onClick={() => handleTabChange("이벤트")}
          >
            이벤트
          </button>
        </div>
        <div className={styles.table}>
          {currentNotices.map((notice, index) => (
            <ul key={index} className={styles.noticelist}>
              <li className={styles.noticeitem}>
                <a href={notice.Link}>
                  <div className={styles.type}>
                    <span className={styles.type_fix}>{notice.Type}</span>
                  </div>
                  <div>{notice.Title}</div>
                  <div className={styles.date}>등록일: {notice.Date}</div>
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(
              noticeData.filter(
                (notice) =>
                  selectedTab === "전체" || notice.Type === selectedTab
              ).length / noticesPerPage
            )}
            page={currentPage}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Motice;
