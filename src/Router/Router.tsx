import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Home, PageNotFound } from "../Pages";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default Router;
