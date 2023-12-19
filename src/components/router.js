import { BrowserRouter, Route, Routes } from "react-router-dom";

import Character from "./charaters/charaters";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
