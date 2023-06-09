import React from "react";
import { Outlet } from "react-router";

type Props = {};

function Home(props: Props) {
  return (
    <div>
      Home
      <Outlet />
    </div>
  );
}

export default React.memo(Home);
