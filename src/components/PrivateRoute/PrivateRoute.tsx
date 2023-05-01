import React from "react";
import { Route, redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      action={(props: any) =>
        currentUser ? <Component {...props} /> : redirect('/login')
      }
    />
  );
};

export default PrivateRoute;