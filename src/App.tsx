import React = require("react");
import TrendingPage from "@/pages/trending";
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

interface Props { }
const BattlePage = React.lazy(() => import("@/pages/battle"));
const BattleResultPage = React.lazy(() => import("@/pages/result"));

// const isEnvProduction = process.env.NODE_ENV !== 'production';
// export const routePrefix = !isEnvProduction ? "github-trending-engineering" : '';
 const routePrefix = "";
export const homePath = `${routePrefix}/`;
export const battlePath = `${routePrefix}/battle`;
export const resultPath = `${routePrefix}/result`;

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isBattlePage = pathname.includes("/battle")
  return (
    <div className="max-w-[1024px] mx-auto px-4 flex flex-col h-screen">
      <div className="py-4">
        <button
          className={`mr-4 ${!isBattlePage ? 'text-orange-500' : ''}`}
          onClick={() => navigate(homePath)}
        >
          Trending
        </button>
        <button
          className={`mr-4 ${isBattlePage ? 'text-orange-500' : ''}`}
          onClick={() => navigate(battlePath)}
        >
          Battle
        </button>
      </div>
      <div className="h-full flex-auto">
        <Outlet />
      </div>
    </div>
  );
}

const App: React.FC<Props> = (props: Props) => {
  return (
    // <BrowserRouter basename={isEnvProduction ? '/github-trending-engineering' : ''}>
    <BrowserRouter>
      <React.Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={resultPath} element={<BattleResultPage />}></Route>
            <Route path={battlePath} element={<BattlePage />}></Route>
            <Route path={homePath} element={<TrendingPage />}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;