import { Navigate } from "react-router";

type PrivateRouteProps = {
  component: React.FC;
};

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const isAuthenticated = true;
  if (isAuthenticated) return <Component />;
  if (!isAuthenticated) return <Navigate to="/login" />;
};