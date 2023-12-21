## Diary Mini Project(React) -> LostArk Open API

## 하는 이유 : 리액트 실력향상, 나만의 블로그 or 일기장 -> LostArk Open API

<h3>데모사이트 - <a href="https://bp4sp4.github.io/LostArk-Open-API/">Demo</a></h3>

<h3>api 어떤거 쓸건지 기획</h3>
- 캐릭터 - 아이템레벨, 서버, 캐릭터, 직업, 닉네임 가져왔음(Characters.json)
- 공지 가져올순있음 - 가져오고 디자인해보기 연습용으로 나쁘지않음
- 캐릭터 눌렀을때 장비 리스트와 툴팁 정도 보여지는거 나쁘지않음 - 디자인
- 마켓은 제외
- 길드관련도 제외
- 게임콘테츠 , 도가토, 도비스 추가

### 디자인 추후 계속 업데이트

<h3> 23/12/19(화)</h3>

- Diary Mini Project(React) -> LostArk Open API 사용하기 변경
  - open api 사용
  - 퍼블리싱 디자인연습
- 홈페이지 변경사항
  ![image](https://github.com/bp4sp4/Diary/assets/62207757/5732cfee-b81a-406a-886c-84eaa1117a98)

<h3> 23/12/12(화)</h3>

- 프로젝트 생성
- 기본 구조 생성
- 초기 디자인
  ![React App](https://github.com/bp4sp4/Diary/assets/62207757/61d2fc02-c9fc-4bb3-b5b2-bb1b8689de73)

```
$ npm create-react-app diary
```

- 필요없는 파일 삭제
  - public 폴더 내에 로고파일들
  - src 폴더안의 불필요한 파일들을 삭제
  - app.js 파일을 열어 내용을 깨끗이 비워준다.
- index.js

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

- 텍스트 에디터 다운

```
npm install @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

```
