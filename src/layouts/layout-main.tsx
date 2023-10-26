import { Outlet } from "react-router-dom";

export function LayoutMain() {
  return (
    <div className="bg-background font-sans antialiased">
      <div className="relative flex flex-col">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
