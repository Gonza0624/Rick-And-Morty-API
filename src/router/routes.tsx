import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CharacterPage } from "../pages/character/character";
import { HomePage } from "../pages/home/home";

export const AppRouter: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
