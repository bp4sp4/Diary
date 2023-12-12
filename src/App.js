import React from "react";
import styles from "./App.module.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// 기본구조세팅
function App() {
  return (
    <div className="App">
      <h1>Diary</h1>
      <div className={styles.diary_contianer}>
        <h2>제목</h2>
        <div>내용</div>
      </div>
      <div className={styles.form_wrapper}>
        <input className={styles.title_input} type="text" placeholder="제목" />
        <CKEditor
          editor={ClassicEditor}
          style={{ height: "300px !important" }}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <div className={styles.buttondisplay}>
        <button className={styles.submit_button}>입력</button>
      </div>
    </div>
  );
}

export default App;
