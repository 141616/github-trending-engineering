import React = require("react");
import TrendingPage from "@/pages/trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface Props { }
const BattlePage = React.lazy(() => import("@/pages/battle"));

const App: React.FC<Props> = (props: Props) => {
  return <BrowserRouter>
    <React.Suspense fallback={<div></div>}>
      <Routes>
        <Route path="/" element={<TrendingPage />}></Route>
        <Route path="/battle" element={<BattlePage />}></Route>
      </Routes>
    </React.Suspense>
  </BrowserRouter>;
};

export default App;