import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Character from "./charaters/charaters";
const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Character />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
