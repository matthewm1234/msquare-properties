import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";


import MetaTag from "../components/metaTag";
import InAppTheme from "./InAppLayout.tsx";
import PageNotFound from "../pages/404.jsx";
import HomeScreen from "../pages/home.tsx";
import PropertiesScreen from "../pages/properties.tsx";
import PropertiesAddScreen from "../pages/properties-add.tsx";

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <>
      <MetaTag title={"pageTitle"} description={"pageDescription"} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>

          {/* theme one  */}
          <Route element={<InAppTheme style="one" theme={1} />}>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<HomeScreen />} />
            <Route path="/properties" element={<PropertiesScreen />} />
            <Route path="/properties/add" element={<PropertiesAddScreen />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
