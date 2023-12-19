import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import Character from "./charaters/charaters";
const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Character />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
