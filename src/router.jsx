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
import CreateCompanyPage from "./pages/CreateCompanyPage";
import AuthProvider from "./hoc/AuthProvider";
import CompanyPage from "./pages/CompanyPage";

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
      <Route path="company" element={<CompanyPage />} />
      <Route path="register/" element={<RegisterPage />} />
      <Route 
        path="company/new/" 
        element={
          <AuthProvider>
            <CreateCompanyPage />
          </AuthProvider>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
