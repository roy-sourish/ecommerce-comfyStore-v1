
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      <Outlet />
      HomeLayout
    </div>
  );
}

export default HomeLayout;
