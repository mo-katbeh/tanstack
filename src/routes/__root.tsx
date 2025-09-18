import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive && "~"} </>}
          </Link>
        </li>
        <li>
          <Link to="/search" activeProps={activeProps}>
            Search
          </Link>
        </li>
      </ul>
      <Outlet />
    </React.Fragment>
  );
}
