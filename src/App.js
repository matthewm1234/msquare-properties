import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";import './App.css';
import PageLoader from "./components/page_loader.js";

const AnimatedRoutes = React.lazy(() => import("./routing/animate_routing.js"));
function App() {
  return (
    //wrap app with HelmetProvide for Meta Data integration
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
