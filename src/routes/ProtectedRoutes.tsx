import React, { ReactNode, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { useAppSelector } from "../redux/hooks/hooks";

interface Props {
  children?: ReactNode;
  authentication?: boolean;
}

const ProtectedRoutes = ({ children, authentication = true }: Props) => {
  const authStatus = useAppSelector((state) => state.auth.status);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  if (loader) {
    return (
      <div className="w-full h-full flex items-center justify-center absolute">
        <RingLoader role="progressbar" color="hsl(150, 100%, 66%)" size={90} />
      </div>
    );
  }

  if (authentication && !authStatus) {
    return <Navigate to="/users/login" replace />;
  }

  if (!authentication && authStatus) {
    return <Navigate to="/" replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoutes;
