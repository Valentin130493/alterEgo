import {
  createBrowserRouter,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router";
import { routes } from "../static/routes";
import { Layout } from "../components";
import {
  ErrorPage,
  HomePage,
  LoginPage,
  NewsPage,
  ProfilePage,
} from "../pages";
import { PrivateRoute } from "./privateRoute";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route path={routes.layout} element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.news} element={<NewsPage />} />
      <Route
        path={routes.profile}
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path={routes.error} element={<ErrorPage />} />
    </Route>
  )
);
