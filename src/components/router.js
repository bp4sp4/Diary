import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./charaters/charaters";
import Notice from "./notice/notice";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/notice/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
