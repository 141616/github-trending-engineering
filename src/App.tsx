import React = require("react");
import TrendingPage from "@/pages/trending";
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

interface Props { }
const BattlePage = React.lazy(() => import("@/pages/battle"));
const BattleResultPage = React.lazy(() => import("@/pages/result"));

const isEnvProduction = process.env.NODE_ENV === 'production';
const routePrefix = isEnvProduction ? "github-trending-engineering" : '';

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div className="max-w-[1024px] mx-auto px-4 flex flex-col h-screen">
      <div className="py-4">
        <button className={`mr-4 ${pathname === '/' ? 'text-orange-500' : ''}`} onClick={() => navigate("/")}>Trending</button>
        <button className={`mr-4 ${pathname === '/battle' ? 'text-orange-500' : ''}`} onClick={() => navigate("/battle")}>Battle</button>
      </div>
      <div className="h-full flex-auto">
        <Outlet />
      </div>
    </div>
  );
}

const App: React.FC<Props> = (props: Props) => {
  console.log("enter App");
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={`${routePrefix}/result"`} element={<BattleResultPage />}></Route>
            <Route path={`${routePrefix}/battle`} element={<BattlePage />}></Route>
            <Route path={`${routePrefix}/`} element={<TrendingPage />}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;