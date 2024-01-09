import styles from "./nav.module.css";
import { Link } from "react-router-dom";
function ColorSchemesExample() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <h3>나의 정보</h3>
          <div className={styles.navbar}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_items}>
                <Link className={styles.navname} to="/">
                  홈
                </Link>
              </li>
              <li className={styles.menu_items}>
                <Link className={styles.navname} to="/notice/notice">
                  공지
                </Link>
              </li>
              <li className={styles.menu_items}>
                <Link
                  className={styles.navname}
                  to="/gamecontents/gamecontents"
                >
                  게임콘텐츠
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorSchemesExample;
