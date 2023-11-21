import React, { useEffect, useState } from "react";
import Navbar from "../layouts/Navbar.jsx";
import FeedCard from "../FeedCard/FeedCard.jsx";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <Navbar />
          <FeedCard />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
