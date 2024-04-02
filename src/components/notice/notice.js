import React, { useEffect, useState } from "react";
import styles from "./notice.module.css";
import ColorSchemesExample from "../nav/nav";
import { Pagination } from "@mui/material";
import NoticeData from "./Notice.json";
import Footer from "../footer/footer";

function Notice() {
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
  const [activeTab, setActiveTab] = useState("전체");

  useEffect(() => {
    setNoticeData(NoticeData);
  });

  // 선택된 탭에 표시할 공지사항의 마지막 인덱스 계산
  const indexOfLastNotice = tabPages[selectedTab] * noticesPerPage;
  // 선택된 탭에 표시할 공지사항의 첫 인덱스 계산
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  // 현재 선택된 탭에 표시할 공지사항 필터링 및 페이지에 맞게 슬라이싱
  const currentNotices = noticeData
    .filter((notice) => selectedTab === "전체" || notice.Type === selectedTab)
    .slice(indexOfFirstNotice, indexOfLastNotice);
  // 페이지 변경 시 호출되는 함수
  const handleChangePage = (event, newPage) => {
    // 현재 페이지 업데이트
    setCurrentPage(newPage);
    // 선택된 탭의 페이지 업데이트
    setTabPages((prevPages) => ({ ...prevPages, [selectedTab]: newPage }));
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(tabPages[tab]);
    setActiveTab(tab);
  };

  return (
    <div className={styles.main}>
      <ColorSchemesExample />
      <div className={styles.noticemain}>
        <div className={styles.tabs}>
          <button
            onClick={() => handleTabChange("전체")}
            className={`${styles.tabsbtn} ${
              activeTab === "전체" ? styles.active : ""
            }`}
          >
            전체
          </button>
          <button
            onClick={() => handleTabChange("공지")}
            className={`${styles.tabsbtn} ${
              activeTab === "공지" ? styles.active : ""
            }`}
          >
            공지
          </button>
          <button
            onClick={() => handleTabChange("점검")}
            className={`${styles.tabsbtn} ${
              activeTab === "점검" ? styles.active : ""
            }`}
          >
            점검
          </button>
          <button
            onClick={() => handleTabChange("상점")}
            className={`${styles.tabsbtn} ${
              activeTab === "상점" ? styles.active : ""
            }`}
          >
            상점
          </button>
          <button
            onClick={() => handleTabChange("이벤트")}
            className={`${styles.tabsbtn} ${
              activeTab === "이벤트" ? styles.active : ""
            }`}
          >
            이벤트
          </button>
        </div>
        {/* ... (기존 코드 부분 생략) */}

        <div className={styles.table}>
          {currentNotices.map((notice, index) => (
            <ul key={index} className={styles.noticelist}>
              <li className={styles.noticeitem}>
                <a target="_blank" href={notice.Link}>
                  <div className={styles.type}>
                    <span className={styles.types}>{notice.Type}</span>
                  </div>
                  <div className={styles.title}>{notice.Title}</div>
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
      <Footer />
    </div>
  );
}

export default Notice;
