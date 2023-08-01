import React = require("react");
import TrendingPage from "@/pages/trending";
import { BrowserRouter, Outlet, Route, Routes, useLocation, useNavigate } from "react-router-dom";

interface Props { }
const BattlePage = React.lazy(() => import("@/pages/battle"));

const Layout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="max-w-[1024px] mx-auto px-4">
      <div className="py-4">
        <button className={`mr-4 ${pathname === '/' ? 'text-orange-500' : ''}`} onClick={() => navigate("/")}>Trending</button>
        <button className={`mr-4 ${pathname === '/battle' ? 'text-orange-500' : ''}`} onClick={() => navigate("/battle")}>Battle</button>
      </div>
      <Outlet />
    </div>
  );
}

const App: React.FC<Props> = (props: Props) => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="battle" element={<BattlePage />}></Route>
            <Route path='/' element={<TrendingPage />}></Route>
          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;