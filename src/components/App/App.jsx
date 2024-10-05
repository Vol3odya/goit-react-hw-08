import {lazy, Suspense, useEffect} from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "../Layout/Layout"

import css from "./App.module.css"
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefresh } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresh=useSelector(selectIsRefresh);

  return isRefresh ? (<b>Please wait...</b>) : (
    <Layout>
      <Suspense fallback={<div>LOADING PAGE...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </Layout>
  )
}
