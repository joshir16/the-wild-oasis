import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import Logo from "../ui/Logo";
import Sidebar from "../ui/Sidebar";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Home", icon: HiOutlineHome },
  { to: "/bookings", label: "Bookings", icon: HiOutlineCalendarDays },
  { to: "/cabins", label: "Cabins", icon: HiOutlineHomeModern },
  { to: "/users", label: "Users", icon: HiOutlineUsers },
  { to: "/settings", label: "Settings", icon: HiOutlineCog6Tooth },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <Logo />
      <Sidebar.SidebarHeader></Sidebar.SidebarHeader>

      <Sidebar.SidebarNav>
        <Sidebar.SidebarList>
          {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
            <Sidebar.SidebarItem key={to}>
              <Sidebar.SidebarLink to={to}>
                <Icon />
                <span>{label}</span>
              </Sidebar.SidebarLink>
            </Sidebar.SidebarItem>
          ))}
        </Sidebar.SidebarList>
      </Sidebar.SidebarNav>
    </Sidebar>
  );
}
