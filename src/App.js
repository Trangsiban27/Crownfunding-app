import React, { lazy, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CampaignPage from "./pages/CampaignPage";
import CampaignAddNew from "./modules/campain/CampaignAddNew";
import LayoutDashBoard from "./layout/LayoutDashBoard";
import CampaignView from "./modules/campain/CampaignView";
import DashBoardPage from "./pages/DashBoardPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (user || user.id) {
  //     navigate("/login");
  //   } else {
  //   }
  // }, [user]);
  return (
    <Routes>
      <Route element={<LayoutDashBoard></LayoutDashBoard>}>
        <Route path="/" element={<DashBoardPage></DashBoardPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/campaign/:slug"
          element={<CampaignView></CampaignView>}
        ></Route>
        <Route
          path="/campaign-add-new"
          element={<CampaignAddNew></CampaignAddNew>}
        ></Route>
      </Route>
      <Route path="/register" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/login" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
