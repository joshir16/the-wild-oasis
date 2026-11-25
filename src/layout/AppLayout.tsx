import { Outlet } from "react-router";
import Header from "../components/Header";
import AppSidebar from "../components/AppSidebar";

export default function AppLayout() {
  return (
    <div className="grid grid-cols-[260px_1fr] grid-rows-[auto_1fr] h-dvh">
      <Header />
      <AppSidebar />
      <main className="bg-(--color-grey-50) pt-8 px-12 pb-14 overflow-y-auto">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
