import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-dvh">
      <Header />
      <Sidebar />
      <main className="bg-(--color-grey-50) pt-10 px-12 pb-16 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
