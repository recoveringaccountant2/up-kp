import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Dashboard from "../Dashboard/Dashboard";
import AssetDetailPage from "../AssetDetailPage/AssetDetailPage";
import NewAssetPage from "../NewAssetPage/NewAssetPage";
import NewServicePage from "../NewServicePage/NewServicePage";
import PartsListPage from "../PartsListPage/PartsListPage";
import NewPartPage from "../NewPartPage/NewPartPage";

import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/:username/:asset' element={<AssetDetailPage />} />
        <Route path='/:username/newasset' element={<NewAssetPage />} />
        <Route path='/:username/:asset/newservice' element={<NewServicePage />} />
        <Route path='/:username/:asset/partslist' element={<PartsListPage />} />
        <Route path='/:username/:asset/newpart' element={<NewPartPage />} />

        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
