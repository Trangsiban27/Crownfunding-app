import React from "react";
import IconDashboard from "../../components/icon/IconDashboard";
import IconCampain from "../../components/icon/IconCampain";
import IconPayment from "../../components/icon/IconPayment";
import IconWithdraw from "../../components/icon/IconWithdraw";
import IconProfile from "../../components/icon/IconProfile";
import IconLogout from "../../components/icon/IconLogout";
import { NavLink } from "react-router-dom";
import IconLight from "../../components/icon/IconLight";

const SidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampain></IconCampain>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/logout",
  },
];

const DashboardSidebar = () => {
  const navLinkClass = `lg:w-[48px] lg:h-[48px] flex items-center lg:justify-center gap-y-5 lg:rounded-xl`;
  return (
    <div className="flex-shrink-0 w-full h-[750px] max-h-[750px] lg:max-w-[78px] rounded-3xl bg-white shadow-2xl items-center flex flex-col py-10 px-3 justify-around">
      {SidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={({ isActive }) =>
            isActive
              ? `${navLinkClass} text-primary bg-primary bg-opacity-20`
              : `${navLinkClass} text-icon-color`
          }
        >
          <span>{link.icon}</span>
          <span className="lg:hidden">{link.title}</span>
        </NavLink>
      ))}

      <div className="pt-[100px]">
        <IconLight></IconLight>
      </div>
    </div>
  );
};

export default DashboardSidebar;
