import React from "react";
import { routeType } from "../constants/routes";
import HomeView from "../view/Home/HomeView";

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { element } = props;
  const renderRoutes = () => {
    switch (element) {
      case routeType.HOME:
        return <HomeView />;
      default:
        return <></>;
    }
  };
  return <>{renderRoutes()}</>;
};
type ProtectedRouteProps = {
  path: string;
  element: string;
  access: boolean;
};
export default ProtectedRoute;
