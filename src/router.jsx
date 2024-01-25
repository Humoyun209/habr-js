import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DetailVacancyPage from "./pages/DetailVacancyPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RedirectProvider from "./hoc/RedirectProvider";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="vacancy/:id/" element={<DetailVacancyPage />} />
      <Route
        path="login/"
        element={
          <RedirectProvider>
            <LoginPage />
          </RedirectProvider>
        }
      />
      <Route path="register/" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
