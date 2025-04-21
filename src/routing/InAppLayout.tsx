import React from "react";
import { Outlet } from "react-router-dom";
import AppLayout from "../layout/appLayout";
import themeOne from "../components/themes/themeOne";
import themeTwo from "../components/themes/themeTwo";
import themeThree from "../components/themes/themeThree";

export default function InAppTheme({
  theme = 1,
}: {
  theme?: 1 | 2 | 3;
}) {
  return (
    <AppLayout
      theme={theme === 1 ? themeOne : theme === 2 ? themeTwo : themeThree}
    >
      <Outlet />
    </AppLayout>
  );
}