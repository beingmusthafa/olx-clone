import React, { useEffect, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
//components
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import Signup from "./Pages/Signup";
import ViewPost from "./Pages/ViewPost";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthContext } from "./context/context";

function App() {
  const { user, setUser } = useContext(AuthContext);
  let [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
      // else {
      //   auth.signOut();
      // }
    });
  }, []);
  useEffect(() => {
    if (user) console.log("user changed to ", user.email);
    else console.log("no user");
  }, [user]);
  if (isLoading) {
    return <div>Loading...</div>; // Or replace with a loading spinner
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/post/:id" element={<ViewPost />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
