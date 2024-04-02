import { BrowserRouter, Route, Routes } from "react-router-dom";
import Character from "./charaters/charaters";
import Notice from "./notice/notice";
import Guilds from "./guilds/guilds";
const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Character />} />
        <Route path="/notice/notice" element={<Notice />} />
        <Route path="/guilds/guilds" element={<Guilds />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
