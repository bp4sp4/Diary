import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.top}>
          <Link to="/">
            <h3>My Info</h3>
          </Link>
          <div className={styles.navbar}>
            <ul className={styles.menu_list}>
              <li className={styles.menu_items}>
                <Link className={styles.navname} to="/">
                  홈
                </Link>
              </li>
              <li className={styles.menu_items}>
                <Link className={styles.navname} to="/notice/notice">
                  공지사항
                </Link>
              </li>
              <li className={styles.menu_items}>
                <Link className={styles.navname} to="/guilds/guilds">
                  길드랭킹
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
