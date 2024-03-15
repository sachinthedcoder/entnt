import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Employeelogin = React.lazy(() => import("pages/Employeelogin"));
const ProjectPortfolio = React.lazy(() => import("pages/ProjectPortfolio"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const Orderdetailview = React.lazy(() => import("pages/Orderdetailview"));
const PricingEngine = React.lazy(() => import("pages/PricingEngine"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/pricingengine" element={<PricingEngine />} />
          <Route path="/orderdetailview" element={<Orderdetailview />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/projectportfolio" element={<ProjectPortfolio />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
