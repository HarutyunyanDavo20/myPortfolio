import { useAuth } from "hooks/use-auth";
import HeaderLazyLoading from "lazyLoading/HeaderLazyLoading";
import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Header = lazy(() => import("./Header"));

const Layout = () => {
  const { isAuth } = useAuth();

  return isAuth ? (
    <>
      <Suspense fallback={<HeaderLazyLoading />}>
        <Header />
      </Suspense>

      <main>
        <Outlet />
      </main>

      <footer>2022</footer>
    </>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default Layout;
