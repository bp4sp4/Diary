import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <nav>
        <a href="https://frontdevpark.tistory.com/" target="_blank">
          Blog
        </a>
        |
        <a href="https://github.com/bp4sp4/" target="_blank">
          Github
        </a>
      </nav>
      <p>
        <span>Copyright 2024. SangHun. All Rights Reserved.</span>
      </p>
    </div>
  );
}

export default Footer;
