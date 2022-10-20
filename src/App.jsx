import React from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import { Route, Routes, Navigate } from "react-router-dom";

const App = () => (
  <>
    <Header />
    <main>
      <Routes>
        <Route exact path="/" render element={<LandingPage />} />
        <Route exact path="/login" render element={<LoginScreen />} />
        <Route exact path="/register" render element={<RegisterScreen />} />
        <Route exact path="/landingpage" render element={<LandingPage />} />
        <Route path="*" render element={<Navigate replace to="/" />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
