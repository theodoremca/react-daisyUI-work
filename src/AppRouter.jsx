import {
  RouterProvider,
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { ClassWorkTwo } from "./pages/ClassWorkTwo";
import { ClassWorkThree } from "./pages/ClassWorkThree";
import { WorkinigWithAPIArray } from "./pages/WorkingWithAPIArray";
import { WorkinigWithAPI } from "./pages/WorkingWithAPI";

export const BrowserRouterApp = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WorkinigWithAPIArray />} />
        <Route path="/thief" element={<ClassWorkTwo />} />
        <Route path="/clara" element={<WorkinigWithAPI />} />
        <Route path="/class-work-3" element={<ClassWorkThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export const BrowserRouterWithMapApp = () =>{
  const routes = [
    { path: "/", page: <WorkinigWithAPIArray /> },
    { path: "/thief", page: <ClassWorkTwo /> },
    { path: "/ebere", page: <WorkinigWithAPI />},
    { path: "/class-work-3", page: <ClassWorkThree /> },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.page}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <WorkinigWithAPIArray /> },
  { path: "/thief", element: <ClassWorkTwo /> },
  { path: "/class-work-3", Component: ClassWorkThree },
]);

export const RouterProviderApp = () => {
  return <RouterProvider router={router} />;
};
